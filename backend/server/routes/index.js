import express from "express";
//testing the firebase database insert
import UserServiceImpl from "../services/UserServiceImpl";
import {
  constructUser,
  updateSessionToken,
  setListing,
} from "../utils/utilFunctions";
import admin from "../db/dbConnection";

import "firebase/auth";

var router = express.Router();

/* GET home page. */

router.get("/", (req, res, next) => {
  if (req.headers.origin == process.env.DEV_ORIGIN_DOMAIN) {
    let uuid = req.query.uuid;

    if (uuid) {
      admin
        .auth()
        .createCustomToken(`${uuid}`)
        .then((customToken) => {
          res.status(200).json({ token: customToken });
        });
    } else {
      res.status(500).send("uuid is not defined");
    }
  } else {
    res.status(401).send("unauthorised to access");
  }
});

router.get("/findAll", (req, res, next) => {
  const userService = new UserServiceImpl();
  if (req.query.factors) {
    const factors = req.query.factors;
    userService.getAllData(res, factors);
  } else {
    res.status(400).send("factors are not defined");
  }
});

router.post("/save", (req, res, next) => {
  let service = new UserServiceImpl();

  let user = constructUser(req);

  if (
    req.session &&
    req.session.token &&
    service.recordExists(req.session.token)
  ) {
    let record = service.getRecord(req.session.token);
    record.then((r) => {
      let rec = JSON.stringify(setListing(r));
      if (rec) {
        rec = JSON.parse(rec);
        if (!rec.address) {
          rec.address = {};
        }
        JSON.stringify(rec);
        user = constructUser(req, rec);
        let key = service.updateRecord(req.session.token, user);
        if (key) res.status(200).send("data updated");
        else res.status(500).send("error updating the document " + key);
      }
    });
  } else if (req.session && !req.session.token && user.salary) {
    let key = service.saveUser(user);
    updateSessionToken(key, req, res);
  } else {
    res.status(500).send("data could not be saved");
  }
});

module.exports = router;

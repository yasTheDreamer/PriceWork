import express from "express";
//testing the firebase database insert
import UserServiceImpl from "../services/UserServiceImpl";
import {
  constructUser,
  updateSessionToken,
  setListing,
} from "../utils/utilFunctions";
var router = express.Router();

/* GET home page. */
router.get("/findAll", (req, res, next) => {
  const userService = new UserServiceImpl();
  userService.getAllData(res);
});

router.post("/save", (req, res, next) => {
  let service = new UserServiceImpl();

  console.log(req.session);
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

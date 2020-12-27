import createError from "http-errors";
import express from "express";
import session from "express-session";
import path from "path";
import logger from "morgan";
import cors from "cors";
const FirebaseStore = require("connect-session-firebase")(session);

import indexRouter from "./routes/index";
import { ref } from "./db/dbConnection";

var app = express();

let sess = {
  name: "__session",
  store: new FirebaseStore({
    database: ref.database(),
  }),
  secret: "price work",
  resave: true,
  saveUninitialized: false,
  cookie: { sameSite: "none", secure: false, httpOnly: false, maxAge: 900000 },
};

app.use(cors({ origin: true, credentials: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(sess));

app.use(express.static(path.join(__dirname, "../public")));
app.use((req, res, next) => {
  res.header("Cache-Control", "private");
  next();
});

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(err.message);
});

module.exports = app;

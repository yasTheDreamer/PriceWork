import createError from "http-errors";
import express from "express";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

//testing the firebase database insert
import UserServiceImpl from "./services/UserServiceImpl";
import User from "./models/User";

let user = new User()
  .withSalary(2000)
  .withJobTitle("Project Manager")
  .withCountry("USA")
  .withZipCode(9000)
  .withState("CA")
  .build();

let service = new UserServiceImpl();
service.saveUser(user);

var app = express();

let sess = {
  secret: "price work",
  resave: false,
  saveUninitialized: true,
  cookie: { sameSite: "none" },
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(session(sess));
app.use("/", indexRouter);
app.use("/users", usersRouter);

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
  res.render("error");
});

module.exports = app;

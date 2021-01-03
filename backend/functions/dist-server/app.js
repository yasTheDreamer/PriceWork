"use strict";var _httpErrors = _interopRequireDefault(require("http-errors"));
var _express = _interopRequireDefault(require("express"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));


var _index = _interopRequireDefault(require("./routes/index"));
var _dbConnection = require("./db/dbConnection");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}var FirebaseStore = require("connect-session-firebase")(_expressSession["default"]);

var app = (0, _express["default"])();

var sess = {
  name: "__session",
  store: new FirebaseStore({
    database: _dbConnection.ref.database() }),

  secret: "price work",
  resave: true,
  saveUninitialized: false,
  cookie: { sameSite: "none", secure: false, httpOnly: false, maxAge: 900000 } };


app.use((0, _cors["default"])({ origin: true, credentials: true }));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({ extended: false }));
app.use((0, _expressSession["default"])(sess));

app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public")));
app.use(function (req, res, next) {
  res.header("Cache-Control", "private");
  next();
});

app.use("/", _index["default"]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
//# sourceMappingURL=app.js.map
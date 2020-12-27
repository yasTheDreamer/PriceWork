"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ref = void 0;

var _dbConfig = require("../config/dbConfig");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//firebase.initializeApp(firebaseConfig);
var ref = _firebaseAdmin["default"].initializeApp(_dbConfig.firebaseConfig); // database setup
//export default firebase;


exports.ref = ref;
var _default = _firebaseAdmin["default"];
exports["default"] = _default;
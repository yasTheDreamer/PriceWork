"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.firebaseConfig = void 0;var _dotenv = _interopRequireDefault(require("dotenv"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var dotenv = _dotenv["default"].config();

var firebaseConfig = {
  apiKey: "AIzaSyCTrviNkH2i4YeEpo6co7K126O9HElMz9I",
  authDomain: "priceworkapp.firebaseapp.com",
  databaseURL: "https://priceworkapp-default-rtdb.firebaseio.com",
  projectId: "priceworkapp",
  storageBucket: "priceworkapp.appspot.com",
  messagingSenderId: "308622328280",
  appId: "1:308622328280:web:4a4373af877f6f5c3872ad" };exports.firebaseConfig = firebaseConfig;
//# sourceMappingURL=dbConfig.js.map
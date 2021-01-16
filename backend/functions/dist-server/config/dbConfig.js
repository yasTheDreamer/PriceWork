"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.firebaseConfig = void 0;var _dotenv = _interopRequireDefault(require("dotenv"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

/**
 * loading env in dev mode
 */

var dotenv = _dotenv["default"].config({ path: "".concat(__dirname, "\\..\\..\\..\\.env") });

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  serviceAccountId: process.env.SERVICE_ACCOUNT_ID };exports.firebaseConfig = firebaseConfig;
//# sourceMappingURL=dbConfig.js.map
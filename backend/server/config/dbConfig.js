import env from "dotenv";

/**
 * loading env in dev mode
 */

const dotenv = env.config({ path: `${__dirname}\\..\\..\\..\\.env` });

export var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  serviceAccountId: process.env.SERVICE_ACCOUNT_ID,
};

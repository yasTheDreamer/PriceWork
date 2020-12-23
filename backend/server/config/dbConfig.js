import env from "dotenv";

const dotenv = env.config();

export const databaseURL = process.env.DB_URL;

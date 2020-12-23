import { databaseURL } from "../config/dbConfig";
import mongoose from "mongoose";

// database setup

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("error establishing database connection ...");
});

db.once("open", () => {
  console.log("database connection established");
});

export default db;

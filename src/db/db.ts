import mongoose from "mongoose";
import { DB_URI } from "../utils/config";

const connectWithDB = () => {
  const url = DB_URI as string;
  mongoose
    .connect(url)
    .then(() => console.log("connected to DB"))
    .catch((e) => console.log(e.message));
};

export default connectWithDB;

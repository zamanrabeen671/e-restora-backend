import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import connectWithDB from "./db/db";

config();
const PORT = process.env.PORT || 8080;
const app: Application = express();

app.use(express.urlencoded({ extended: true }));

connectWithDB();
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello its work");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost: ${PORT}`);
});

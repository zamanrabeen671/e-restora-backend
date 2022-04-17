import * as dotenv from "dotenv";

dotenv.config();
let path = `${__dirname}/../.env`;
dotenv.config({ path: path });

export const DB_URI = process.env.DB_URI;

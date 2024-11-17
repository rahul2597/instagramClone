import express from "express";
import * as dotenv from "dotenv";
import posts_route from "./route/posts_route.js";
import database from "./connection/connect.js";
import cors from "cors";

const app = express();

dotenv.config();
database();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("uploads"));
app.use("/api/posts", posts_route);

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port ${process.env.PORT}`);
});

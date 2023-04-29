import { resolve } from "path";
import express from "express";

export const app = express();

app.use(express.static(resolve(__dirname, "static")));

app.use("/api/posts", (req, res) => {
  console.log("Handling Request!!");
  res.json({ status: "OK" });
});

import { join } from "path";
import express from "express";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.get("/", (rec, res) => res.render("home"));

const handleListening = () =>
  console.log(`v Server running: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

import express from "express";
import animalRouter from "../routes/animal.route.js";

const app = express();

app.use(express.json());
app.use("/api/animal", animalRouter);

export default app;

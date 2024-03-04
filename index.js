import dotenv from "dotenv";
dotenv.config();
import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();
app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutos
  max: 550, // Quantidade máxima de requisições permitidas por IP no intervalo de tempo
});
const port = process.env.PORT || 3000;

app.use(cors());
app.use(limiter);

import userRoute from "./src/routes/user.routes.js";
import db from "./src/database/db.js";

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

db.connectDatabase();

app.use(userRoute);
app.listen(port);

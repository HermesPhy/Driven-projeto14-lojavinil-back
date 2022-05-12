import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";

import authRouter from "./routes/authRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(authRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green("Server running on port " + process.env.PORT))
})
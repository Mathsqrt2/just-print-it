import express from "express";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";

const cookieParser = require("cookie-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', userRoutes);

app.use(helmet());

export default app;
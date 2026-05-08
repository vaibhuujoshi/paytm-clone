import express from "express";
import connectDB from "./config/db.js";
import rootRouter from "./routes/index.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/v1', rootRouter);

connectDB();

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
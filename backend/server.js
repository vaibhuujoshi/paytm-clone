import express from "express";
import connectDB from "./config/db";
import rootRouter from "./routes/index.js"

const app = express();

app.use(express.json());

app.use('/api/v1/user', rootRouter);

connectDB();

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
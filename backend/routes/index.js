import express from "express";
import userRoutes from "./userRoutes.js";
import accountRoutes from "./accountRoutes.js"

const router = express.Router();

router.use("/user", userRoutes);
router.use("/account", accountRoutes);

export default router;
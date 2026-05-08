import express from "express";
import auth from "../middlewares/authMiddleware";
import AccountModel from "../models/account";

const router = express.Router();

router.get('/balance', auth, async (req, res) => {
    const userId = req.user.id;

    try {
        const account = await AccountModel.findOne({ userId });

        const balance = account.balance;

        res.status(200).json(balance);
        
    } catch (err) {
        res.status(500).json({
            message: "There is some error from server side"
        });
    }
})

export default router;
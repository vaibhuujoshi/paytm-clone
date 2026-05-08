import express from "express";
import auth from "../middlewares/authMiddleware.js";
import AccountModel from "../models/account.js";
import mongoose from "mongoose";

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

router.post('/transfer', auth, async (req, res) => {
    const { to, amount } = req.body;

    const userId = req.user.id;

    const session = await mongoose.startSession();  

    try {
        session.startTransaction();

        const account = await AccountModel.findOne({ userId }).session(session);

        if (!account) {
            await session.abortTransaction();

            return res.status(400).json({
                message: "Invalid account"
            })
        }

        if (account.balance < amount) {
            await session.abortTransaction();

            return res.status(400).json({
                message: "Insufficient balance"
            })
        }

        const toAccount = await AccountModel.findOne({userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();

            return res.status(400).json({
                message: "Invalid account"
            })
        }

        await AccountModel.updateOne({
            userId: userId
        }, {
            $inc: {balance: -amount}
        }).session(session);

        await AccountModel.updateOne({
            userId: to
        }, {
            $inc: {balance: amount}
        }).session(session);

        await session.commitTransaction();

        res.json({
            message: "Transfer successful"
        })

    } catch (err) {
        await session.abortTransaction();

        res.status(500).json({
            message: "There is some error from server side"
        });
    } finally {
        await session.endSession()
    }

})

export default router;
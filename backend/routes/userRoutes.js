import express from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../models/user.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    const requiredBody = z.object({
        username: z.string().min(3).max(30),
        password: z.string()
            .min(8, { message: "Password should have minimum length of 8" })
            .max(15, "Password is too long")
            .regex(/^(?=.*[A-Z]).{8,}$/, {
                message:
                    "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
            }),
        firstName: z.string().min(1).max(50),
        lastName: z.string().min(1).max(50),
    });

    const parsedWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedWithSuccess.success) {
        return res.status(411).json({
            message: "invalid format"
        })
    }

    const existingUser = await UserModel.findOne({
        username: username
    });

    if (existingUser) {
        return res.status(411).json({
            message: "username already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.create({
        username,
        password: hashedPassword,
        firstName,
        lastName
    })

    res.status(200).json({
        message: "You are signed up successfully"
    })
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    const requiredBody = z.object({
        username: z.string().min(3).max(30),
        password: z.string()
            .min(8, { message: "Password should have minimum length of 8" })
            .max(15, "Password is too long")
            .regex(/^(?=.*[A-Z]).{8,}$/, {
                message:
                    "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
            }),
    });

    const parsedWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedWithSuccess.success) {
        return res.status(411).json({
            message: "invalid format"
        })
    }

    const user = await UserModel.findOne({
        username: username
    });

    if (!user) {
        return res.status(411).json({
            message: "user not found"
        })
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
        return res.status(403).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
    })

    res.status(200).json({
        token: token,
        message: "You are signed in successfully"
    })
});

router.get('/me', auth, async (req, res) => {
    const userId = req.user.id;

    const user = await UserModel.findById(userId).select("-password");

    if (!user) {
        return res.status(411).json({
            message: "user not found"
        })
    }

    res.status(200).json(user);

});

router.put('/', auth, async (req, res) => {
    const userId = req.user.id

    const updateBody = zod.object({
        password: zod.string().optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional(),
    })

    const parsedWithSuccess = updateBody.safeParse(req.body);

    if (!parsedWithSuccess.success) {
        return res.status(411).json({
            message: "invalid format"
        })
    }

    await UserModel.updateOne({ _id: userId }, req.body);

    res.status(201).json({
        message: "Updated successfully"
    })
});

export default router;
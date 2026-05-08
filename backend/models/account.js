import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const AccountSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: "users",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const AccountModel = mongoose.model("accounts", AccountSchema);

export default AccountModel;
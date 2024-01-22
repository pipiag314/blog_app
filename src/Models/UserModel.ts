import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 25,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },    
    password: {
        type: String,
        required: true,
        min: 8,
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});


export const UserModel = mongoose.model("User", userSchema);
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    description: {
        type: String,
        required: true,
    },
    img: String,
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true});

export const PostModel = mongoose.model("Post", postSchema);
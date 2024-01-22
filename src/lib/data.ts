import { PostModel } from "@/Models/PostModel";
import { connectToDB } from "./utils";
import { UserModel } from "@/Models/UserModel";


export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await PostModel.find({});
        if(!posts) throw new Error("DB is empty, there is not posts")
        return posts;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const getPost = async (id: string) => {
    try {
        connectToDB();
        const post = await PostModel.findById(id)
        if(!post) throw new Error("no post found in DB")
        return post;
    } catch (error) {
        console.log("Error: ", error);
    }
}


export const getUser = async (id: string) => {
    try {
        connectToDB();
        const user = await UserModel.findById(id)
        if(!user) throw new Error("user not found in DB")
        return user;
    } catch (error) {
        console.log("Error: ", error)
    }
}


export const getUsers = async () => {
    try {
        connectToDB();
        const users = await UserModel.find({});
        if(!users) throw new Error("DB is empty, there is no users")
        return users;
    } catch (error) {
        console.log("Error: ", error)
    }
}
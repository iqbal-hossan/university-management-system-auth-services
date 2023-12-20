import { Request, Response } from "express";
import usersServices from "./users.services";


const createUser = async(req: Request, res: Response) =>{
    try{
        const user = req.body;
        console.log("req", user)
        const result = await usersServices.createUser(user);
        res.status(200).json({
            success: true,
            message: 'user created successfully!',
            data: result
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success: false,
            message:'Failed to create user',
            error: err
        })
    }
}

export default {createUser};
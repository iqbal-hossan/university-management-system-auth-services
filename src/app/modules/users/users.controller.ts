import { Request, Response } from "express";
import { UserService } from "./users.services";
import { z } from "zod";

const createUser = async(req: Request, res: Response) =>{
    try{
        // const createUserZodSchema = z.object({
        //     body: z.object({
        //         role: z.string({
        //             required_error: 'role is required!',
        //         }),
        //         password: z.string().optional()
        //     })
        // })

        // await createUserZodSchema.parseAsync(req)


        const user = req.body;
        console.log("req", user)
        const result = await UserService.createUser(user);
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

export const UserController = {createUser};
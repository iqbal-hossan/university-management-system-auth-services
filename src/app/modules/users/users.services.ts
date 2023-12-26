import config from "../../../config";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generateUserId } from "./users.utils";


const createUser = async(user: IUser):Promise<IUser | null> =>{
    console.log("user", user)
    // auto generated incremental id
    const id = await generateUserId();
    user.id = id;
    // default password
    if(!user.password){
        user.password = config.default_student_pass as string;
    }
        
    const createdUser = await User.create(user);

    if(!createUser){
        throw new Error("Failed to create user!");
    }

    return createdUser;
}

export const UserService = {
    createUser
}
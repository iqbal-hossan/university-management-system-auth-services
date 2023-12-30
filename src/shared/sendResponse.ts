import { Response } from "express";

type TApiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    data?: T | null;
}

const sendResponse =<T>(res: Response,data:TApiResponse<T>):void =>{
    const responseData: TApiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        data: data.data || null
    }
    res.status(data.statusCode).json()

}

export default sendResponse;
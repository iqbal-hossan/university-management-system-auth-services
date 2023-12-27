import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../interfaces/error";
import config from "../config";
import handleValidationError from "../errors/handleValidationError";
import ApiError from "../errors/ApiError";
import { errorLogger } from "../shared/logger";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {

    config.env === 'development' ? console.log("globaErrorHandler ~ ", error) :
    errorLogger.error("globalErrorHandler ~ ", error);
    let statusCode = 500;
    let message = "Something went wrong!";
    let errorMessages: IGenericErrorMessage[] = [];

    if (error.name === 'ValidationError') {
        const simplifiedError = handleValidationError(error)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    } else if(error instanceof ZodError){
        const simplifiedError = handleZodError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages
    }  
    else if (error instanceof ApiError) {
        statusCode = error?.statusCode;
        message = error?.message;
        errorMessages = error?.message ? [
            {
                path: '',
                message: error.message
            }
        ] : []
    }
    else if (error instanceof Error) {
        message = error?.message;
        errorMessages = error?.message ? [{
            path: '',
            message: error?.message
        }] : []
    }


    // if(error instanceof Error){
    //     res.status(400).json({error: error})
    // }else{
    //     res.status(500).json({error: "Something went wrong!"})
    // }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env !== 'production' ? error.stack : undefined,

    });
}

export default globalErrorHandler;
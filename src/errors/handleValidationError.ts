import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/error";
import { TGenericErrorResponse } from "../interfaces/common";

const handleValidationError = (error: mongoose.Error.ValidationError): TGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = Object.values(error.errors).map((el: mongoose.Error.ValidationError | mongoose.Error.CastError) => {
        return {
            path: el?.path,
            message: el?.message
        }
    })

    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        errorMessages: errors
    }
}

export default handleValidationError;
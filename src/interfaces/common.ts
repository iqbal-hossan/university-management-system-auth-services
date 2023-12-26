import { IGenericErrorMessage } from "./error";

export type TGenericErrorResponse ={
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
}
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { academicSemesterTitleCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createSemester = async (payload: TAcademicSemester): Promise<TAcademicSemester> => {

    if(academicSemesterTitleCodeMapper[payload.title] !== payload.code){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester!')
    }
    const result = await AcademicSemester.create(payload);
    return result

}

export const AcademicSemesterServices = {
    createSemester
}
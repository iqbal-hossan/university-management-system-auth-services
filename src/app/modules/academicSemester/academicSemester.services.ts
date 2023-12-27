import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createSemester = async (payload: TAcademicSemester): Promise<TAcademicSemester> => {
    const result = await AcademicSemester.create(payload);
    return result

}

export const AcademicSemesterServices = {
    createSemester
}
import { Request,Response, NextFunction } from "express";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = async(req: Request, res:Response, next:NextFunction) =>{
    try{
        const {...academicSemesterData} = req.body;
        const result = await AcademicSemesterServices.createSemester(academicSemesterData);

        res.status(200).json({
            success: true,
            message: 'Academic semester created successfully!',
            data: result
        })
        
    }catch(error){
        next(error)
    }
}


export const AcademicSemesterController = {createAcademicSemester};
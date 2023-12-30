import { Request, Response, NextFunction } from "express";
import { AcademicSemesterServices } from "./academicSemester.services";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createAcademicSemester = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { ...academicSemesterData } = req.body;
        const result = await AcademicSemesterServices.createSemester(academicSemesterData);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Academic Semester Created Successfully',
            data: result
        })
        next();

    })


export const AcademicSemesterController = { createAcademicSemester };
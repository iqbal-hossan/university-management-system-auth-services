import { z } from 'zod';
import {  academicSemesterTtiles,academicSemesterCodes, academicSemesterMonths } from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
    body: z.object({
        title: z.enum([...academicSemesterTtiles] as [string, ...string[]], {
            required_error: "title is required!"
        }),
        year: z.number({
            required_error: "year  is required!"
        }),
        code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
            required_error: 'code  is required!'
        }),
        startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
            required_error: 'start month is required!'
        }),
        endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
            required_error: 'end month is required!'
        })
    })
})

export const AcademicSemesterValidtion = {
    createAcademicSemesterZodSchema
}
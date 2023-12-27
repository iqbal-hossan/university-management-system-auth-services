import { Model, Schema, model } from 'mongoose'
import { TAcademicSemester, AcademicSemesterModel } from './academicSemester.interface'
import {academicSemesterCodes, academicSemesterMonths, academicSemesterTtiles,  } from './academicSemester.constant';



const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    title: { type: String, required: true, enum: academicSemesterTtiles },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: academicSemesterCodes },
    startMonth: { type: String, required: true, enum: academicSemesterMonths },
    endMonth: { type: String, required: true, enum: academicSemesterMonths },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TAcademicSemester, AcademicSemesterModel>('AcademicSemester', academicSemesterSchema);



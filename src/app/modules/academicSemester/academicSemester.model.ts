import { Schema, model } from 'mongoose'
import { TAcademicSemester, AcademicSemesterModel } from './academicSemester.interface'
import {academicSemesterCodes, academicSemesterMonths, academicSemesterTtiles,  } from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';


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

// Handling same year and semester issue
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if(isExist){
    throw new ApiError(httpStatus.CONFLICT, 'Academic semester is already exist!');
  }
  next();
})



export const AcademicSemester = model<TAcademicSemester, AcademicSemesterModel>('AcademicSemester', academicSemesterSchema);



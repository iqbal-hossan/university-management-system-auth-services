import { Model } from "mongoose";

export type TAcademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall';

export type TAcademicSemesterCodes = '01' | '02' | '03';

export type TAcademicSemesterMonths = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type TAcademicSemester = {
    title: TAcademicSemesterTitles;
    year: number;
    code: TAcademicSemesterCodes;
    startMonth: TAcademicSemesterMonths;
    endMonth: TAcademicSemesterMonths;
}

export type AcademicSemesterModel = Model<TAcademicSemester>;
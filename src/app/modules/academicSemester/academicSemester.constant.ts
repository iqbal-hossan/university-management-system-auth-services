import { TAcademicSemesterMonths, TAcademicSemesterCodes, TAcademicSemesterTitles } from "./academicSemester.interface";

export const academicSemesterTtiles: TAcademicSemesterTitles[] = ['Autumn', 'Summer', 'Fall'];

export const academicSemesterCodes: TAcademicSemesterCodes[] = ['01', '02', '03'];

export const academicSemesterMonths: TAcademicSemesterMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
    Autumn: '01',
    Summer: '02',
    Fall: '03'
}
import express from "express"
import validateRequest from "../../../middlewares/validateRequest"
import { AcademicSemesterValidtion } from "./academicSemester.validation"
import { AcademicSemesterController } from "./academicSemester.controller"

const router = express.Router()

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidtion.createAcademicSemesterZodSchema), AcademicSemesterController.createAcademicSemester)

export const AcademicSemesterRoute = router;
import express from "express"
import { UserRoutes } from "../modules/users/users.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";

const router = express.Router();

const moduleRoutes = [
    {
        path:'/user',
        route: UserRoutes
    },{
        path:'/academic-semesters',
        route: AcademicSemesterRoute
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;
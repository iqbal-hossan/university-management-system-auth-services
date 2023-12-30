import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/users.route'
import { AcademicSemesterRoute } from './app/modules/academicSemester/academicSemester.route';
import routes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();

// Parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Application routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoute);
app.use('/api/v1/', routes)

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully!');
//   Promise.reject(new Error('Unhandled Promise Rejection'))
  // console.log(x)
})


// Global error handler
app.use(globalErrorHandler);

// Handle not found
app.use((req: Request, res: Response, next:NextFunction)=>{
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages:[{
      path: req.originalUrl,
      message: 'API Not Found'
    }]
  });
  next();
})

export default app

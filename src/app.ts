import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/users.route'

const app: Application = express()

// Parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Application routes
app.use('/api/v1/users/', UserRoutes)
// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully!');
//   Promise.reject(new Error('Unhandled Promise Rejection'))
  // console.log(x)
})


// Global error handler
app.use(globalErrorHandler);


export default app

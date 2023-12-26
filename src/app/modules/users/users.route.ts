import express from 'express';
import { UserController } from './users.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { UsersValidation } from './users.validation';

const router = express.Router();

router.post('/create-user', validateRequest(UsersValidation.createUserZodSchema), UserController.createUser);

export const UserRoutes = router;
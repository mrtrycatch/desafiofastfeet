import { Router } from 'express';
//import Recipient from './app/models/recipient';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';
import adminMiddlewares from './app/middlewares/admin';

const routes = new Router();

routes.post(
  '/users',
  [authMiddlewares, adminMiddlewares],
  UserController.store
);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);
routes.put('/users', UserController.update);

export default routes;

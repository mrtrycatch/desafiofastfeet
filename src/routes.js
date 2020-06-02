import { Router } from 'express';
//import Recipient from './app/models/recipient';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddlewares from './app/middlewares/auth';
import adminMiddlewares from './app/middlewares/admin';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);
routes.put('/users', UserController.update);

routes.use([authMiddlewares, adminMiddlewares]);
routes.post('/users', UserController.store);
routes.post('/recipients', RecipientController.store);

export default routes;

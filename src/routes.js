import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

// Session Actions
routes.post('/session', UserController.store);

export default routes;

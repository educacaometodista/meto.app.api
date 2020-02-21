import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
// import FileController from './app/controllers/FileController';

const routes = new Router();
// const upload = multer(multerConfig);

// Session Actions
routes.post('/session', SessionController.store);

routes.post('/users', UserController.store);

// routes.post('/files', upload.single('file'), FileController.store);

export default routes;

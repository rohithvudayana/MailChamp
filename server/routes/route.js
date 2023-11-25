import express from 'express'
import { getEmails, saveSendEmails } from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.get('/emails/:type', getEmails);

export default routes;
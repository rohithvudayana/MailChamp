import express from 'express'
import { getEmails, saveSendEmails , moveEmailsToBin} from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', saveSendEmails)
routes.post('/bin', moveEmailsToBin);

export default routes;
import express from 'express';
import { Contacts } from '../../controllers/contact/index.js';

export const contactRouter = express.Router();

contactRouter.get('/', Contacts.GetController.getContact);
contactRouter.post('/', Contacts.PostController.postContact);
contactRouter.put('/:id', Contacts.PutController.putContact);
contactRouter.all('/:id', Contacts.DeleteController.deleteContact);

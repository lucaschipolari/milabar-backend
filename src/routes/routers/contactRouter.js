import express from 'express';
import { Contacts } from '../../controllers/contact/index.js';
import { isAdmin } from '../../middlewares/isAdmin.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

export const contactRouter = express.Router();

contactRouter.post('/', Contacts.PostController.postContact);
contactRouter.get(
  '/',
  isAuthenticated,
  isAdmin,
  Contacts.GetController.getContact,
);
contactRouter.put(
  '/:id',
  isAuthenticated,
  isAdmin,
  Contacts.PutController.putContact,
);
contactRouter.all(
  '/:id',
  isAuthenticated,
  isAdmin,
  Contacts.DeleteController.deleteContact,
);

import { DeleteController } from '../contact/controllers/DeleteController.js';
import { GetController } from '../contact/controllers/GetController.js';
import { PutController } from '../contact/controllers/PutController.js';
import { EmptyController } from './controllers/EmptyController.js';
import { PostController } from './controllers/PostController.js';

export const ShoppingCart = {
  GetController,
  PostController,
  DeleteController,
  PutController,
  EmptyController,
};

import { Router } from "express";
import * as BooksController from './books.controller';

const router = Router();

router
    .route('/books')
    .get(BooksController.readBooks);

export default router;


import { Router } from "express";
import * as BooksController from './books.controller';

const router = Router();

router
    .route('/books')
    .get(BooksController.getBooks);

router
    .route('/books/:author')
    .get(BooksController.getBooksByAuthor);

router
    .route('/books/search/author/:search')
    .get(BooksController.getBooksByAuthorSearch);

router
    .route('/books/search/title/:search')
    .get(BooksController.getBooksByTitleSearch);

router
    .route('/books')
    .post(BooksController.createBook);

router
    .route('/books')
    .put(BooksController.updateBook);

router
    .route('/books/:bookId')
    .delete(BooksController.deleteBook);

export default router;


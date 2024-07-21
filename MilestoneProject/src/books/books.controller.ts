import { Request, RequestHandler, Response } from 'express';
import * as BooksDAO from './books.dao';
import { OkPacket } from 'mysql';

export const getBooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let books;
        let bookId = parseInt(req.query.bookId as string);

        console.log('bookId', bookId);
        if (Number.isNaN(bookId)) {
            books = await BooksDAO.getBooks();
        } else {
            books = await BooksDAO.getBooksByBookId(bookId);
        }

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const getBooksByAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const books = await BooksDAO.getBooksByAuthor(req.params.author);

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooksByAuthor][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const getBooksByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
    try { 
        const books = await BooksDAO.getBooksByAuthorSearch('%' + req.params.search + '%');

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooksByAuthorSearch][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const getBooksByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const books = await BooksDAO.getBooksByTitleSearch('%' + req.params.search + '%');

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooksByTitleSearch][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const createBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BooksDAO.createBook(req.body);

        console.log('req.body', req.body);
        console.log('album', okPacket);

        res.status(200).json(okPacket);

    } catch (error) {
        console.error('[books.controller][createBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing book'
        });
    }
};

export const updateBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BooksDAO.updateBook(req.body);

        console.log('req.body', req.body);
        console.log('book', okPacket);

        res.status(200).json(okPacket);
        
    } catch (error) {
        console.error('[books.controller][updateBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating book'
        });
    }
};

export const deleteBook: RequestHandler  = async (req: Request, res: Response) => {
    try {
        let bookId = parseInt(req.params.bookId as string);

        console.log('bookId', bookId);

        if (!Number.isNaN(bookId)) {
            const response = await BooksDAO.deleteBook(bookId);
            
            res.status(200).json (response);
        } else {
            throw new Error('Integer expected for bookId');
        }
    } catch (error) {
        console.error('[books.controller][deleteBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting book'
        });
    }
};

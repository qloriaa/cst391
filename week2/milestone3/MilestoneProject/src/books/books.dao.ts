import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Book } from './books.model';
import { bookQueries } from './books.queries';

export const getBooks = async () => {
    return execute<Book[]>(bookQueries.readBooks, []);
};

export const getBooksByAuthor = async (authorName: string) => {
    return execute<Book[]>(bookQueries.readBooksByAuthor, [authorName]);
};

export const getBooksByAuthorSearch = async (searchTerm: string) => {
    console.log('search param: ', searchTerm);
    return execute<Book[]>(bookQueries.readBooksByAuthorSearch, [searchTerm]);
};

export const getBooksByTitleSearch = async (searchTerm: string) => {
    console.log('search param: ', searchTerm);
    return execute<Book[]>(bookQueries.readBooksByTitleSearch, [searchTerm]);
};

export const getBooksByBookId = async (bookId: number) => {
    return execute<Book[]>(bookQueries.readBooksByBookId, [bookId]);
};

export const createBook = async (book: Book) => {
    return execute<OkPacket>(bookQueries.createBook, [book.title, book.author, book.price, book.description, book.isbn13]);
};

export const updateBook = async (book: Book) => {
    return execute<OkPacket>(bookQueries.updateBook, [book.title, book.author, book.price, book.description, book.isbn13, book.bookId]);
};

export const deleteBook = async (bookId: number) => {
    return execute<OkPacket>(bookQueries.deleteBook, [bookId]);
};
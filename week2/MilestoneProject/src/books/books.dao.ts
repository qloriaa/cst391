import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Book } from './books.model';
import { bookQueries } from './books.queries';

export const readBooks = async () => {
    return execute<Book[]>(bookQueries.readBooks, []);
}

export const readBooksByAuthor = async (authorName: string) => {
    return execute<Book[]>(bookQueries.readBooksByAuthor, [authorName]);
}

export const readBooksByAuthorSearch = async (searchTerm: string) => {
    console.log('search param: ', searchTerm);
    return execute<Book[]>(bookQueries.readBooksByAuthorSearch, [searchTerm]);
}

export const readBooksByTitleSearch = async (searchTerm: string) => {
    console.log('search param: ', searchTerm);
    return execute<Book[]>(bookQueries.readBooksByTitleSearch, [searchTerm]);
}

export const readBooksByBookId = async (bookId: number) => {
    return execute<Book[]>(bookQueries.readBooksByBookId, [bookId]);
}

export const createBook = async (book: Book) => {
    return execute<OkPacket>(bookQueries.createBook, [book.title, book.author, book.price, book.description, book.ISBN13]);
}

export const updateBook = async (book: Book) => {
    return execute<OkPacket>(bookQueries.updateBook, [book.title, book.author, book.price, book.description, book.ISBN13])
}

export const deleteBook = async (bookId: number) => {
    return execute<OkPacket>(bookQueries.deleteBook, [bookId]);
}
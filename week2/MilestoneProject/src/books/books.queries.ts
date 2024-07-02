import { createBook, deleteBook, readBooks, readBooksByAuthor, readBooksByAuthorSearch, readBooksByBookId, readBooksByTitleSearch, updateBook } from "./books.dao";

export const bookQueries = {

    readBooks:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM library.books`,

    readBooksByAuthor:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM library.books
        WHERE library.books.author = ?`, 

    readBooksByAuthorSearch:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM library.books
        WHERE library.books.author LIKE ?`, 

    readBooksByTitleSearch:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM library.books
        WHERE library.books.title LIKE ?`,

    readBooksByBookId:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM library.books
        WHERE library.books.id LIKE ?`,
    
    createBook:
        `INSERT INTO BOOKS(title, author, price, description, isbn13) VALUES (?, ?, ?, ?, ?)`,

    updateBook:
        `UPDATE library.books
        SET title = ?, author = ?, price = ?, description = ?, isbn13 = ?
        WHERE id = ?`,
    
    deleteBook:
        `DELETE FROM library.books
        WHERE id = ?`


}
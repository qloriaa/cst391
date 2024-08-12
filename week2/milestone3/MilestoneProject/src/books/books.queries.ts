
export const bookQueries = {

    readBooks:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM christian_library.books`,

    readBooksByAuthor:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM christian_library.books
        WHERE christian_library.books.author = ?`, 

    readBooksByAuthorSearch:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM christian_library.books
        WHERE christian_library.books.author LIKE ?`, 

    readBooksByTitleSearch:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM christian_library.books
        WHERE christian_library.books.title LIKE ?`,

    readBooksByBookId:
        `SELECT id AS bookId, title AS title, author AS author, price AS price, description AS description, isbn13 AS ISBN13
        FROM christian_library.books
        WHERE christian_library.books.id LIKE ?`,
    
    createBook:
        `INSERT INTO BOOKS(title, author, price, description, isbn13) VALUES (?, ?, ?, ?, ?)`,

    updateBook:
        `UPDATE christian_library.books
        SET title = ?, author = ?, price = ?, description = ?, isbn13 = ?
        WHERE id = ?`,
    
    deleteBook:
        `DELETE FROM christian_library.books
        WHERE id = ?`
}
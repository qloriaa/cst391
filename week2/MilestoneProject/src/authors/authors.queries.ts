import { readAuthors } from "./authors.dao";

export const authorQueries = {
    readAuthors:
        `SELECT
            DISTINCT author AS author
        FROM library.books`
}
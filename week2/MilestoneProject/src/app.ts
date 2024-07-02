import express from 'express';
import booksRouter from './books/books.routes';
import authorsRouter from './authors/authors.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use('/', [booksRouter, authorsRouter]);
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// enable all CORS request
app.use(cors());
// adding set of security middleware
app.use(helmet());


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    });

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}
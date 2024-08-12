import express, {Request, Response} from 'express';
import booksRouter from './books/books.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

// enable all CORS request
app.use(cors());
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// adding set of security middleware
app.use(helmet());

// MySQL Connector
if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

// Application Routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to my Milestone Project</h1>');
});

// add middleware router
app.use('/', [booksRouter]);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    });

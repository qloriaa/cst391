// Import dependencies 
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from 'cors'; // "Cross-Origin Resource Sharing"
import helmet from 'helmet';
import artistsRouter from './artists/artists.routes';
import albumsRouter from './albums/albums.routes'
import logger from "./middleware/logger.middleware";

dotenv.config();
// Display environment message (test environment variables)
// console.log(process.env.GREETING);

// assign express to var 'app'
const app = express();
// Set port for server
const port = process.env.PORT;

// enable all CORS request
app.use(cors());
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
};

// Application Routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>');
});

// adding router middleware
app.use('/', [albumsRouter, artistsRouter]);

// Server will start on the specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

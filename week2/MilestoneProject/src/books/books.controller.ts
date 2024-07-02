import { Request, RequestHandler, Response } from 'express';
import { Book } from './books.model';
import * as BooksDAO from './books.dao';
import { OkPacket } from 'mysql';

const BOOKS = [
    { id: 1, name: 'Jesus Calling' , author: 'Sarah Young' , price: 16.99, description: "Experience a deeper relationship with Jesus as you savor the presence of the One who understands you perfectly and loves you forever. With Scripture and personal reflections, New York Times bestselling author Sarah Young brings Jesus' message of peace—for today and every day.", ISBN13: '978-1591451884'},
    { id: 2, name: 'The Awe of God', author: 'John Bevere', price: 28.99, description: "Do you long for an intimate relationship with your Creator, but He seems elusive? Perhaps it is because something utterly essential is missing—the fear of the Lord. Don’t let this frighten you. Fearing God is very different than being afraid of God. It’s the key to everything.", ISBN13: '978-1400336708' }, 
    { id: 3, name: 'In the Lord I Take Refuge: 150 Daily Devotions through the Psalms', author: 'Dane Ortlund', price: 22.99, description: "The Psalms could be called the Bible’s devotional. Each psalm reflects on the greatness of who God is and how he cares for his people. Written with profound emotion, each psalm sheds light on the raw experiences of the human heart, revealing how God’s people should turn to him in times of anguish, pain, remorse, joy, and thanksgiving.", ISBN13: '978-1433577703' },
    { id: 4, name: 'Gentle and Lowly: The Heart of Christ for Sinners and Sufferers', author: 'Dane Ortlund', price: 19.99, description: "Christians know what Jesus Christ has done—but who is he? What is his deepest heart for his people, weary and faltering on their journey toward heaven? Jesus said he is “gentle and lowly in heart.” This book reflects on these words, opening up a neglected yet central truth about who he is for sinners and sufferers today.", ISBN13: '978-1433566134'},
    { id: 5, name: 'Disciplines of a Godly Man', author: 'R. Kent Hughes', price: 18.99, description: "Seasoned pastor R. Kent Hughes’s inspiring and bestselling book Disciplines of a Godly Man―now updated with fresh references and suggested resources―is filled with godly advice aimed at helping men grow in the disciplines of prayer, integrity, marriage, leadership, worship, purity, and more.", ISBN13: '978-1433561306'}
];

export const getBooks = (req: Request, res: Response) => {
    res.send(BOOKS);
};

export const readBooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let books;
        let bookId = parseInt(req.query.bookId as string);

        console.log('bookId', bookId);
        if (Number.isNaN(bookId)) {
            books = await BooksDAO.readBooks();
        } else {
            books = await BooksDAO.readBooksByBookId(bookId);
        }

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const readBooksByAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const books = await BooksDAO.readBooksByAuthor(req.params.author);

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooksByAuthor][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const readBooksByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const books = await BooksDAO.readBooksByAuthorSearch('%' + req.params.author + '%');

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooksByAuthorSearch][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const readBooksByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const books = await BooksDAO.readBooksByTitleSearch('%' + req.params.author + '%');

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooksByTitleSearch][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};


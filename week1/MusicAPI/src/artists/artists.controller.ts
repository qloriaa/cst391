// import dependencies
import { Request, RequestHandler, Response } from "express";
import * as ArtistDAO from './artists.dao';

export const readArtists: RequestHandler = async (req: Request, res: Response) => {
    try {
        const artist = await ArtistDAO.readArtists();

        res.status(200).json( artist );
    } catch (error) {
        console.error('[artist.controller][ReadArtists][Error]');
        res.status(500).json({ message: 'Error fetching artist' });
    }
};

/*
// List of Artists
const ARTISTS = [
    { id: 1, name: 'The Beatles' },
    { id: 2, name: 'The Who' },
    { id: 3, name: 'Abba' }
];

export const getArtists = (req: Request, res: Response) => {
    res.send(ARTISTS);
};
*/
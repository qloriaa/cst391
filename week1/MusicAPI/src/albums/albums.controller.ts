// import dependencies
import { Request, RequestHandler, Response } from "express";
import { Album } from './albums.model';
import { Track } from '../tracks/tracks.model';
import * as AlbumDAO from './albums.dao';
import * as TracksDAO from '../tracks/tracks.dao';
import { OkPacket } from 'mysql';

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albums;
        let albumId = parseInt(req.query.albumId as string);

        console.log('albumId ', albumId);
        if (Number.isNaN(albumId)) {
            albums = await AlbumDAO.readAlbums();
        } else {
            albums = await AlbumDAO.readAlbumsByAlbumId(albumId);
        }
        await readTracks(albums, res);

        res.status(200).json(
            albums
        );
    } catch (error) {
        console.error('[albums.controller][readAlbums][Error] ', error);
        res.status(500).json({
            message: 'Error fetching albums'
        });
    }
};

export const readAlbumsByArtist: RequestHandler = async (req: Request, res: Response) => {
    try {
        const albums = await AlbumDAO.readAlbumsByArtist(req.params.artist);

        await readTracks(albums, res);

        res.status(200).json(albums);
    } catch (error) {
        console.error('[albums.controller][readAlbumsByArtist][Error] ', error);
        res.status(500).json({ message: 'Error fetching albums using artist'});
    }
};

export const readAlbumsByArtistSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const albums = await AlbumDAO.readAlbumsByArtistSearch('%' + req.params.search + '%');

        await readTracks(albums, res);

        res.status(200).json(albums);
    } catch (error) {
        console.error('[albums.controller][readAlbumsByArtistSearch][Error] ', error);
        res.status(500).json({
            message: 'Error fetching albums by artist search'
        });
    }
};

export const readAlbumsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const albums = await AlbumDAO.readAlbumsByDescriptionSearch('%' + req.params.search + '%');

        await readTracks(albums, res);

        res.status(200).json(albums);
    } catch (error) {
        console.error('[albums.controller][readAlbumsByDescription][Error] ', error);
        res.status(500).json({ message: 'Error fetching albums by description'});
    }
};

export const createAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AlbumDAO.createAlbum(req.body);

        console.log('req.body', req.body);
        console.log('album', okPacket);

        req.body.tracks.forEach(async (track: Track, index: number) => {
            try {
                await TracksDAO.createTrack(track, index, okPacket.insertId);
            } catch (error) {
                console.error('[albums.controller][createAlbumTracks][Error] ', error);
                res.status(500).json({
                    message: 'Error when writing album tracks'
                });
            }
        });

        res.status(200).json({ okPacket });
    } catch (error) {
        console.error('[albums.controller][createAlbum][Error] ', error);
        res.status(500).json({ message: 'Error fetching writing albums' });
    }
};

export const updateAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        
        console.log('req.body', req.body);
        const okPacket: OkPacket = await AlbumDAO.updateAlbum(req.body);

        console.log('req.body', req.body);
        console.log('album', okPacket);

        req.body.tracks.forEach(async (track: Track, index: number) => {
            try {
                await TracksDAO.updateTrack(track);
                console.log('track update/added ', index);
            } catch (error) {
                console.error('[albums.controller][updateAlbumTracks][Error] ', error);
                res.status(500).json({
                    message: 'Error updating album tracks'
                });
            }
        });

        res.status(200).json({ okPacket });
    } catch (error) {
        console.error('[albums.controller][updateAlbum][Error] ', error);
        res.status(500).json({ message: 'Error updating album' });
    }
};

async function readTracks(albums: Album[], res: Response<any, Record<string, any>>) {
    for (let i = 0; i < albums.length; i++) {
        try {
            const tracks = await TracksDAO.readTracks(albums[i].albumId);
            albums[i].tracks = tracks;
        } catch (error) {
            console.error('[albums.controller][readTracks][Error] ', error);
            res.status(500).json({ message: 'Error fetching album tracks' });
        }
    }
};

export const deleteAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albumId = parseInt(req.params.albumId as string);

        console.log('album', albumId);
        if (!Number.isNaN(albumId)) {
            const response = await AlbumDAO.deleteAlbum(albumId);

            res.status(200).json( response );
        } else {
            throw new Error('Integer expected for albumId');
        }
    } catch (error) {
        console.error('[albums.controller][deleteAlbum][Error] ', error);
        res.status(500).json({ message: 'Error deleting albums' });
    }
};


/*
// Hardcoded ALBUMS list
const ALBUMS = [
    { id: 1, name: 'Please Please Me (1963)', band: 'The Beatles' },
    { id: 2, name: 'With The Beatles (1963)', band: 'The Beatles' },
    { id: 3, name: 'A Hard Day\'s Night (1964) Anchester United', band: 'The Beatles' },
    { id: 4, name: 'Beatles For Sale (1964)', band: 'The Beatles' },
    { id: 5, name: 'Help! (1965)' , band: 'The Beatles' },
    { id: 6, name: 'Rubber Soul (1965)', band: 'The Beatles' },
    { id: 7, name: 'Sgt Pepper\'s Lonely Hearts Club Band (1967)', band: 'The Beatles' },
    { id: 8, name: 'Most of these records are not very good', band: 'The Beatles' }
];

// getAlbums func will return list ALBUMS
export const getAlbums = (req: Request, res: Response) => {
    res.send(ALBUMS);
};
*/
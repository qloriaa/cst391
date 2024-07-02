import { readAlbums } from "./albums.controller";
import { createAlbum, deleteAlbum, readAlbumsByAlbumId, readAlbumsByArtist, readAlbumsByArtistSearch, readAlbumsByDescriptionSearch, updateAlbum } from "./albums.dao";

export const albumQueries = {

    readAlbums: 
        `SELECT
            id AS albumId, title as title, artist AS artist,
            description AS description, year As year, image AS image
        FROM music.albums`,
    
    readAlbumsByArtist:
        `SELECT
            id AS albumId, title as title, artist AS artist,
            description AS description, year As year, image AS image
        FROM music.albums
        WHERE music.albums.artist = ?`,

    readAlbumsByArtistSearch:
        `SELECT
            id AS albumId, title as title, artist AS artist,
            description AS description, year As year, image AS image
        FROM music.albums
        WHERE music.albums.artist LIKE ?`,

    readAlbumsByDescriptionSearch:
        `SELECT
            id AS albumId, title as title, artist AS artist,
            description AS description, year As year, image AS image
        FROM music.albums
        WHERE music.albums.description LIKE ?`,
    
    readAlbumsByAlbumId: 
        `SELECT
            id AS albumId, title as title, artist AS artist,
            description AS description, year As year, image AS image
        FROM music.albums
        WHERE music.albums.id = ?`,
    
    createAlbum:
        `INSERT INTO ALBUMS(title, artist, description, year, image)
        VALUES (?, ?, ?, ?, ?)`,

    updateAlbum:
        `UPDATE music.albums
        SET title = ?, artist = ?, year = ?, image = ?, description = ?
        WHERE id = ?`,
    
    deleteAlbum:
        `DELETE FROM music.albums
        WHERE id = ?`,
}
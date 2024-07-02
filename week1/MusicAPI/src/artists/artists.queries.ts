import { readArtists } from "./artists.dao";

export const artistQueries = {

    readArtists:
        `SELECT DISTINCT artist AS artist
        FROM music.albums`
}
import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';

// application-wide injector - allows service to be accessed across entire app.
@Injectable({ providedIn: 'root' })
export class MusicServiceService {
  // Create Artist and Albums lists
  artists: Artist[] = [];
  albums: Album[] = [];

  constructor() {
    // Initialize Artists list - this is a hardcoded initialization of list
    this.artists.push(new Artist(0, 'The Beatles'));

    // Initialize Albums list using JSON file -
    //    Loop over the JSON Music Data to also initialize its Tracks
    for (let x = 0; x < exampledata.length; ++x) {
      // If Artist is "The Beatles" add tracks
      if (exampledata[x].artist == 'The Beatles') {
        // Create a Track list for album
        let tracks: Track[] = [];

        // Iterate through JSON file to create and initialize a new Track, add track to Track list
        for (let y = 0; y < exampledata[x].tracks.length; ++y)
          tracks.push(
            new Track(
              exampledata[x].tracks[y].id,
              exampledata[x].tracks[y].number,
              exampledata[x].tracks[y].title,
              this.checkNull(exampledata[x].tracks[y].lyrics),
              this.checkNull(exampledata[x].tracks[y].video)
            )
          );

        // Add album to Album list
        this.albums.push(
          new Album(
            exampledata[x].id,
            exampledata[x].title,
            exampledata[x].artist,
            this.checkNull(exampledata[x].description),
            exampledata[x].year,
            exampledata[x].image,
            tracks
          )
        );
      }
    }
  }

  /**
   * For null values -"null" cannot be assigned to type "string"
   * @param value
   * @returns string or Null values are empty strings.
   */
  checkNull(value: string | null): string {
    if (value == null) return '';
    return value;
  }

  /**
   * GET All Artists
   * @returns Return the list of Artists
   */
  public getArtists(): Artist[] {
    return this.artists;
  }

  /**
   * GET All Albums by given Artist
   * @param artist
   * @returns Return the list of Albums
   */
  public getAlbums(artist: string): Album[] {
    // Create a list of Albums for this specific Artist
    let artistAlbums: Album[] = [];

    // Check albums list for albums by this artists
    for (let x = 0; x < this.albums.length; ++x){
      // if Artist match found
      if (this.albums[x].Artist == artist) {
        // Add album to list
        artistAlbums.push(this.albums[x]);
      }
    }
    return artistAlbums;
  }

  /**
   * Search for given Artists using Artist name and Id
   * @param artist
   * @param id
   * @returns Return Album
   */
  public getAlbum(artist: string, id: number): Album {
    // Search for the Album in list of Albums and return the Album when found
    for (let x = 0; x < this.albums.length; ++x) {
      // Album is found when an Artist and Album ID values match
      if (this.albums[x].Artist == artist && this.albums[x].Id == id) {
        // Need Album info and tracks in Album
        // Create a Track list for this album
        let tracks: Track[] = [];

        // Initialize a Tracks list for this Album
        for (let y = 0; y < this.albums[x].Tracks.length; ++y)
          tracks.push(
            new Track(
              this.albums[x].Tracks[y].Id,
              this.albums[x].Tracks[y].Number,
              this.albums[x].Tracks[y].Title,
              this.albums[x].Tracks[y].Lyrics,
              this.albums[x].Tracks[y].Video
            )
          );

        // Return all Album info
        return new Album(
          this.albums[x].Id,
          this.albums[x].Title,
          this.albums[x].Artist,
          this.albums[x].Description,
          this.albums[x].Year,
          this.albums[x].Image,
          tracks
        );
      }
    }
    // Album not found, return null
    return null as any;
  }

  /**
   * Create a new Album
   * @param album
   * @returns 1, if successful
   */
  public createAlbum(album: Album): number {
    let newArtist = true;

    // Check if Artist already exist
    this.artists.forEach((x) => {
      // Artist name matched to existing Artist
      if (x.Name.match(album.Artist)) {
        newArtist = false;
      }
    });

    // Album is by a New Artist
    if (newArtist) {
      // Artist Id , Artist name
      this.artists.push(new Artist(this.artists.length, album.Artist));
    }
    // Add a new Album to the list of Albums
    this.albums.push(album);
    return 1;
  }

  /**
   * Update existing Album by Id
   * @param album
   * @returns 0 if successful, -1 failed
   */
  public updateAlbum(album: Album): number {
    // Search for the Album in the list of Albums and replace it in the list
    for (let x = 0; x < this.albums.length; ++x) {
      // Check for Id match with existing Albums
      if (this.albums[x].Id == album.Id) {
        // Replace album
        this.albums.splice(x, 1, album);
        return 0;
      }
    }
    // Album not found with Id
    return -1;
  }

  /**
   * Delete album by Album Id
   * @param id
   * @param artist
   * @returns 0 successful, -1 failed
   */
  public deleteAlbum(id: number, artist: string): number {
    // Search for the Album in the list of Albums and delete from the list
    for (let x = 0; x < this.albums.length; ++x) {
      // Album Id match found
      if (this.albums[x].Id == id) {
        // Remove album from Albums List
        this.albums.splice(x, 1);
        return 0;
      }
    }
    return -1;
  }
}

import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { HttpClient } from '@angular/common/http';

// application-wide injector - allows service to be accessed across entire app.
@Injectable({ providedIn: 'root' })
export class MusicServiceService  {

  // Add private connection
  // (my Express MusicAPI server listens to port 5000)
  private host = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  /**
   * GET All Artists
   * @param callback Artist[]
   * TS syntax define a callback function with an array of Artist as
   *    a parameter. The callback returns void. getArtists also returns
   *    void; however, these are defined independently.
   */
  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http
      .get<Artist[]>(this.host + '/artists')
      .subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }

  /**
   * GET All Albums
   * @param callback Album[]
   */
  public getAlbums(callback: (albums: Album[]) => void): void {
    // Return list of Albums
    this.http
      .get<Album[]>(this.host + '/albums')
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }

  /**
   * GET All Albums by a given Artist
   * @param artistName String Name of Artist selected
   * @param callback Album[]
   */
  public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): void {
    // Http request string
    let request = this.host + `/albums/${artistName}`;

    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

  /**
   * Create a new Album
   * @param album Album being created
   * @param callback
   * @returns
   */
  public createAlbum(album: Album, callback: () => void): void {
    //Add new Album
    this.http.post<Album>(this.host + '/albums', album).subscribe((data) => {
      callback();
    });
  }

  /**
   * Update existing Album by Id
   * @param album
   * @param callback
   */
  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + '/albums', album).subscribe((data) => {
      callback();
    });
  }

  /**
   * Delete album by Album Id
   * @param id
   * @param callback
   */
  public deleteAlbum(id: number, callback: () => void): void {
    this.http.delete(this.host + '/albums/' + id).subscribe((data) => {
      callback();
    });
  }

  /**
   * GET Album searching by Album Id
   * @param id Album identifier
   * @param callback
   */
  public getAlbumById(id: number, callback: (albums: Album[]) => void) {
    this.http
      .get<Album[]>(this.host + '/albums?albumId=' + id)
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }
}

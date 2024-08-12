import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})

export class ListAlbumsComponent implements OnInit {

  @Input() artist?: Artist;

  albums!: Album[];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    this.service.getAlbumsOfArtist(this!.artist!.name,
      (albums: Album[]) => this.albums = albums);

    /*console.log("Getting data...");
    this.service.getAlbumsOfArtist(this.artist.name, (albums: Album[]) => {
      this.albums = albums;
      console.log('this.albums', this.albums);
    }); */
  }

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}

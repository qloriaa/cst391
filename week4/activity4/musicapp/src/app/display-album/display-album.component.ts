import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/albums.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css'
})
export class DisplayAlbumComponent {
  @Input()  album?: Album;

  currentRoute: string = '';

  constructor (private route: ActivatedRoute, private service: MusicServiceService) {
    // access route params
    this.route.params.subscribe(params => {
      // get ID param
      let albumId = parseInt(params['Id']);
      console.log("Id:" + albumId);

      this.service.getAlbumById(albumId, (album: Album[]) => {
        album: album[0];
      });

      console.log(this.album);
    });
  }

  ngOnInit () {}

}

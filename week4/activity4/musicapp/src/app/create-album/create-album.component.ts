import {  Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { MusicServiceService} from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit
{
  album: Album = {
    albumId: Math.floor(Math.random() * 1000000),
    title: "",
    artist: "",
    description: "",
    year: "",
    image: "",
    tracks: [],
  };

  tracksRaw:string = "";
  wasSubmitted:boolean = false;

  constructor(private service: MusicServiceService) { }

  ngOnInit()
  {
  }

  public onSubmit()
  {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let tracks:Track[] = [];
    let tracksAll = this.tracksRaw.split('\n');
    for(let x=0;x < tracksAll.length;++x)
    {
      let title = "";
      let lyrics = "";
      let video = "";
      let trackInfo = tracksAll[x];
      let trackParts = trackInfo.split(':');
      if(trackParts.length == 3)
      {
        title = trackParts[0];
        lyrics = trackParts[1];
        video = trackParts[2];
      }
      else if(trackParts.length == 2)
      {
        title = trackParts[0];
        lyrics = trackParts[1];
      }
      else
      {
        title = trackParts[0];
      }
      tracks.push(
        { trackId: Math.floor(Math.random() * 1000000), number: x + 1, title, lyrics, video }
      );
    }

    this.album.tracks = tracks;

    this.service.createAlbum(this.album, () => {
      console.log("Album Created");
    });
    this.wasSubmitted = true;
  }


}

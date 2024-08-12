import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicServiceService } from './service/music-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title: String = 'My Music Collection';
  version: String = "1.0";

  constructor(private router: Router)
  {

  }


  // Display version info using JS Alertbox
  displayVersion () {
    window.alert("App Version " + this.version );
  }

  // Navigate to component
  displayArtistList () {
    //alert("Display list here.");
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  }


}

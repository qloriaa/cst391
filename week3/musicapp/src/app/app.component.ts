import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'My Music Collection';
  version = 1.0;

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

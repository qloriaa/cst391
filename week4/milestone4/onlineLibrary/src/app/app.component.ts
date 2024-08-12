import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'God’s Wisdom Online Bookshop';
  version = '1.0';

  constructor(private router: Router)
  {

  }

  public displayVersion()
  {
    // Display Version in a JavaScript Alertbox
    alert(this.title + " Version: " + this.version);
  }

  public displayBookList()
  {
    // Navigate to the List Artist Component and tack on a timestamp so the component gets reinitialized
    this.router.navigate(['list-books'], { queryParams: { data: new Date()} });
  }

}

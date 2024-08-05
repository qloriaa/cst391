import { Component } from '@angular/core';
import { applyMixins } from 'rxjs/internal/util/applyMixins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my first app';
}

@Component({
  selector: 'app-message',
  template: '<h3>Gloria Quezada\'s first app</h3>'
})

export class MessageComponent {
}

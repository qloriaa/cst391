import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookshopServiceService } from '../service/bookshop-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book (
    Math.floor(Math.random() * 1000000),
    "", "", 0, "", ""
  );
  wasSubmitted: boolean = false;

  constructor (private service: BookshopServiceService) {

  }

  ngOnInit() {

  }

  public onSubmit () {
    let status = this.service.createBook(this.book);

    console.log("createBook() returned " + status);
    this.wasSubmitted = true;
  }
}

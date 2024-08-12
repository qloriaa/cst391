import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookshopServiceService } from '../service/bookshop-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {

  book: Book = {
    id: Math.floor(Math.random() * 1000000),
    title: "",
    author: "",
    price: 0,
    isbn13: "",
    description: ""
  };
  wasSubmitted: boolean = false;

  constructor (private service: BookshopServiceService) {

  }

  ngOnInit() {

  }

  public onSubmit () {
    this.service.createBook(this.book, () => {
      console.log("Book Created");
    });

    this.wasSubmitted = true;
  }
}

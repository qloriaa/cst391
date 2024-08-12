import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../models/book.model';
import { BookshopServiceService } from '../service/bookshop-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {

  @Input() book!: Book;

  editedBook: Book = {
    id: this.book.id,
    title: this.book.title,
    author: this.book.author,
    price: this.book.price,
    isbn13: this.book.isbn13,
    description: this.book.description
  };
  wasSubmitted: boolean = false;

  constructor (private activatedRoute: ActivatedRoute,
    private service: BookshopServiceService,
    private location: Location,
    private router: Router) {

      this.activatedRoute.params.subscribe((params) => {
        this.editedBook.id = params['id'];
      });
  }

  ngOnInit() {

  }

  public onSubmit () {
    this.service.updateBook(this.book, () => {
      console.log("Book Created");
    });

    this.wasSubmitted = true;
  }

  onCancel() {
    this.service.getBook(this.book.id, (book: Book[])=> {
      book: book[0];
    });
  }
}


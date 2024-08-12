import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../models/Book';
import { BookshopServiceService } from '../service/bookshop-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {

  @Input() book!: Book;
  wasSubmitted: boolean = false;

  constructor (private service: BookshopServiceService,
      private route: ActivatedRoute,
      private location: Location ) {

  }

  ngOnInit() {

  }

  onCancel () {
    this.location.back();
  }

  public onSubmit () {
    let status = this.service.updateBook(this.book);
    console.log("updateBook() returned " + status);
    this.wasSubmitted = true;
  }
}


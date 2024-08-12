import { Component } from '@angular/core';
import { BookshopServiceService } from '../service/bookshop-service.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/Book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  selectedBook: Book | null = null;
  books: Book[] = [];

  constructor(private route: ActivatedRoute, private service: BookshopServiceService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data....");
      this.books = this.service.getBooks();
      this.selectedBook = null;
    });
  }

  public onSelectBook(book: Book) {
    this.selectedBook = book;
  }

}

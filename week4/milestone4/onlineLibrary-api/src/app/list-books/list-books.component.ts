import { Component } from '@angular/core';
import { BookshopServiceService } from '../service/bookshop-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {

  selectedBook: Book | null = null;
  books!: Book[]; //listA

  constructor (private activatedRoute: ActivatedRoute,
    private service: BookshopServiceService,
    private location: Location,
    private router: Router) {

  }

  ngOnInit() {
    console.log("Getting data..");

    this.service.getBooks((books: Book[]) => {
      this.books = books;
      console.log('this.books', this.books);
    });
  }

  public onSelectBook(book: Book) {
    this.selectedBook = book;
    //let id = this.selectedBook.id;
    //this.router.navigate([`/display/${id}`], { queryParams: { book } });
  }

}


import { Injectable } from '@angular/core';
import harddata from '../../data/sample-data.json';
import { Book } from '../models/Book';


@Injectable({ providedIn: 'root' })
export class BookshopServiceService {

  books: Book[] = [];

  constructor() {
    // Create a list of books by looping over JSON Data
    for (let x = 0; x < harddata.length; ++x) {
      this.books.push(new Book(
        harddata[x].bookId,
        harddata[x].title,
        harddata[x].author,
        harddata[x].price,
        harddata[x].ISBN13,
        harddata[x].description
      ));
    }
  }

  public getBooks(): Book[] {
    //return full list of books
    return this.books;
  }

  public getBook(id: number): Book {
    for(let x = 0; x < this.books.length; ++x) {
      if (this.books[x].Id == id) {
        return new Book (
          harddata[x].bookId,
          harddata[x].title,
          harddata[x].author,
          harddata[x].price,
          harddata[x].ISBN13,
          harddata[x].description
        );
      }
    }
    return null as any;
  }

  public createBook(book: Book): number {
    // add new book to list
    this.books.push(book);
    return 1;
  }

  public updateBook(book: Book): number {
    // search for book in list
    for (let x = 0; x < this.books.length; ++x) {
      if (this.books[x].Id == book.Id) {
        this.books.splice(x, 1, book);
        return 0; // success
      }
    }
    return -1; // fail, book not found
  }

  public deleteBook(id: Number): number {
    // search for book in list
    for (let x = 0; x < this.books.length; ++x) {
      if (this.books[x].Id == id) {
        this.books.splice(x, 1);
        return 0; // success
      }
    }
    return -1; // fail, not found
  }

}

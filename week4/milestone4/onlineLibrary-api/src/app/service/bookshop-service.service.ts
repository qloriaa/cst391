import { Injectable } from '@angular/core';
//import harddata from '../../data/sample-data.json';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class BookshopServiceService {

  books: Book[] = [];

  private host = "http://localhost:5000"

  constructor(private http: HttpClient) {
    /*
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
    */
  }
// Retrieves All Artist data from REST API
public getBooks(callback: (books: Book[])=> void): void {
    // get full list of books from db
    this.http.get<Book[]>(this.host + "/books").
      subscribe((books: Book[]) =>{
        callback(books);
      });

  }
  // http://localhost:5000/books?bookId=20
  public getBook(id: Number, callback: (books: Book[]) => void) {
    this.http.get<Book[]>(this.host + "/books?bookId=" + id)
    .subscribe((books: Book[])=>{
      callback(books);
    });
  }


  public createBook(book: Book, callback: ()=> void): void {
    this.http.post<Book[]>(this.host + "/books/", book).
    subscribe((data) =>{
      callback();
    });
  }


  public updateBook(book: Book, callback: ()=> void): void {
    this.http.put<Book[]>(this.host + "/books/", book).
    subscribe((data) =>{
      callback();
    });
  }


  public deleteBook(id: number, callback: ()=> void): void {
    this.http.delete(this.host + "/books/" + id).
    subscribe((data) =>{
      callback();
    });
  }


}

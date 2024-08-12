import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookshopServiceService } from '../service/bookshop-service.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrl: './display-book.component.css'
})
export class DisplayBookComponent  {
  @Input() book!: Book;
  bookId: Number | null = null;

  currentRoute: string ='';

  selectedEdit: Book | null = null;
  selectedDelete: number | null = null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, private service: BookshopServiceService) {
    // Access route parameters
    this.activatedRoute.params.subscribe(params => {
      // Access the 'id' parameter
      this.bookId = parseInt(params['id']);
      console.log("bookId: " + this.bookId)
      // this.album = this.service.getAlbumById(albumId);

      this.service.getBook(this.bookId, (book: Book[])=> {
        book: book[0];
      });

      console.log(this.book);

    });

  }

  public onEdit() {
    this.router.navigate(['edit/', this.bookId]);
  }
}

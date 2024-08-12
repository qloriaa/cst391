import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { ActivatedRoute } from '@angular/router';
import { BookshopServiceService } from '../service/bookshop-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrl: './display-book.component.css'
})
export class DisplayBookComponent implements OnInit {

  @Input() book!: Book;
  selectedEdit: Book | null = null;
  selectedDelete: Number | null = null;

  constructor(private service: BookshopServiceService){

  }

  ngOnInit() {

  }

  public onEdit() {
    this.selectedEdit = this.book;
    console.log ("Editing " + this.book.Title);
  }

  public onDelete() {
    console.log("Deleting " + this.book.Id);
    this.selectedDelete = this.book.Id;
  }
}

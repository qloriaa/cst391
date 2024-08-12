import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookshopServiceService } from '../service/bookshop-service.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})

export class DeleteBookComponent  implements OnInit {

  @Input() id!: Number;
  constructor(private route: ActivatedRoute, private service: BookshopServiceService) {  }

  ngOnInit()
  {
    let status = this.service.deleteBook(this.id);
    console.log("The return from deleteBook() was " + status);
  }

}

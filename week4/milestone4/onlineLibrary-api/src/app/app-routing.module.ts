import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';


const routes: Routes = [
  { path: 'create', component: CreateBookComponent },
  { path: 'books', component:  ListBooksComponent},
  { path: 'display/:id', component: DisplayBookComponent },
  { path: 'edit/:id', component: EditBookComponent },
  { path: 'delete/:id', component: DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

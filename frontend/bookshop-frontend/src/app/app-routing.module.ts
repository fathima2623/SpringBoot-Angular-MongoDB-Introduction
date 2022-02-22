import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {AddAuthorComponent} from "./Components/author/add-author/add-author.component";
import {AuthorListComponent} from "./Components/author/author-list/author-list.component";
import {AuthorUpdateComponent} from "./Components/author/author-update/author-update.component";
import {AuthorDetailsComponent} from "./Components/author/author-details/author-details.component";
import {AddBookComponent} from "./Components/Book/add-book/add-book.component";
import {BookListComponent} from "./Components/Book/book-list/book-list.component";
import {BookDetailsComponent} from "./Components/Book/book-details/book-details.component";
import {BookUpdateComponent} from "./Components/Book/book-update/book-update.component";
import {AddBookshopComponent} from "./Components/BookShop/add-bookshop/add-bookshop.component";
import {BookshopListComponent} from "./Components/BookShop/bookshop-list/bookshop-list.component";
import {BookshopDetailsComponent} from "./Components/BookShop/bookshop-details/bookshop-details.component";
import {BookshopUpdateComponent} from "./Components/BookShop/bookshop-update/bookshop-update.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'author-list',component: AuthorListComponent},
  {path: 'author-details/:id',component: AuthorDetailsComponent},
  {path: 'update-author/:id',component: AuthorUpdateComponent},
  {path: 'add-book',component: AddBookComponent},
  {path: 'book-list',component: BookListComponent},
  {path: 'book-details/:id',component: BookDetailsComponent},
  {path: 'update-book/:id',component: BookUpdateComponent},
  {path: 'add-bookshop', component: AddBookshopComponent},
  {path: 'bookshop-list', component: BookshopListComponent},
  {path: 'bookshop-details/:id',component: BookshopDetailsComponent},
  {path: 'update-bookshop/:id',component: BookshopUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

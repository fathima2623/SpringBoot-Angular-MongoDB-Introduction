import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { AddAuthorComponent } from './Components/author/add-author/add-author.component';
import { AuthorDetailsComponent } from './Components/author/author-details/author-details.component';
import { AuthorListComponent } from './Components/author/author-list/author-list.component';
import { AuthorUpdateComponent } from './Components/author/author-update/author-update.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
//import {DataTablesModule} from "angular-datatables";
import {NgSelectModule} from "@ng-select/ng-select";
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBookComponent } from './Components/Book/add-book/add-book.component';
import { BookListComponent } from './Components/Book/book-list/book-list.component';
import { BookDetailsComponent } from './Components/Book/book-details/book-details.component';
import { BookUpdateComponent } from './Components/Book/book-update/book-update.component';
import { AddBookshopComponent } from './Components/BookShop/add-bookshop/add-bookshop.component';
import { BookshopListComponent } from './Components/BookShop/bookshop-list/bookshop-list.component';
import { BookshopDetailsComponent } from './Components/BookShop/bookshop-details/bookshop-details.component';
import { BookshopUpdateComponent } from './Components/BookShop/bookshop-update/bookshop-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    AuthorUpdateComponent,
    HomeComponent,
    NavbarComponent,
    AddBookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookUpdateComponent,
    AddBookshopComponent,
    BookshopListComponent,
    BookshopDetailsComponent,
    BookshopUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
   // DataTablesModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../models/bookshop";
import {BookshopService} from "../../services/bookshop.service";
import {ActivatedRoute, Params} from "@angular/router";
import { NgModule } from '@angular/core';
import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books?: Book[];
  currentBook: Book= {};
  currentIndex = -1;
  title = '';

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAll()
      .subscribe({
        next: (data) => {
          this.books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

  }



  refreshList(): void {
    this.getAllBooks();
    this.currentBook = {};
    this.currentIndex = -1;
  }

  removeAllBooks(): void {
    if (confirm('Are you sure you want to delete all books')) {
      this.bookService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  }



  searchbookByName(): void {
    this.currentBook = {};
    this.currentIndex = -1;

    this.bookService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}

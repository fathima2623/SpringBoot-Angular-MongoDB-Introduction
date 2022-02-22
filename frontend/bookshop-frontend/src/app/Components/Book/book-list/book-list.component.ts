import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookService} from "../../../services/book.service";
import {Author} from "../../../models/author";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

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

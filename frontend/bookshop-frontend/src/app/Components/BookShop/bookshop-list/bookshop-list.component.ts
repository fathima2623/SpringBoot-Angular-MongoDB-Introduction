import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookShop} from "../../../models/bookshop";
import {BookService} from "../../../services/book.service";
import {BookshopService} from "../../../services/bookshop.service";

@Component({
  selector: 'app-bookshop-list',
  templateUrl: './bookshop-list.component.html',
  styleUrls: ['./bookshop-list.component.css']
})
export class BookshopListComponent implements OnInit {

  bookshops?: BookShop[];
  currentBookshop: BookShop= {};
  currentIndex = -1;
  title = '';
  constructor(private bookshopService : BookshopService) { }

  ngOnInit(): void {
    this.getAllBookshops();
  }

  getAllBookshops(): void {
    this.bookshopService.getAll()
      .subscribe({
        next: (data) => {
          this.bookshops = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.getAllBookshops();
    this.currentBookshop = {};
    this.currentIndex = -1;
  }

  removeAllBookshops(): void {
    if (confirm('Are you sure you want to delete all book shops')) {
      this.bookshopService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  }

  bookshop?: BookShop;
  searchbookByName(): void {
    this.currentBookshop = {};
    this.currentIndex = -1;

    this.bookshopService.findByTitle(this.title
    )
      .subscribe({
        next: (data) => {
          this.bookshop = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}

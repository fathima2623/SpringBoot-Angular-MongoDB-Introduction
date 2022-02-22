import { Component, OnInit } from '@angular/core';
import {BookshopService} from "../../../services/bookshop.service";
import {ActivatedRoute, Params} from "@angular/router";
import {BookShop} from "../../../models/bookshop";
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";
import {GenreService} from "../../../services/genre.service";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-bookshop-update',
  templateUrl: './bookshop-update.component.html',
  styleUrls: ['./bookshop-update.component.css']
})
export class BookshopUpdateComponent implements OnInit {

  selected: any;
  books: any;

  id?: string;
  bookshop = new BookShop();
  submitted = false;

  constructor(private bookshopService:BookshopService,
              private route: ActivatedRoute,
              private bookService: BookService) { }



  ngOnInit(): void {

    this.bookshop = new BookShop()

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()];
        this.bookshopService.get(this.id)
          .subscribe({
            next: (data) => {
              this.bookshop = data;
              this.selected = this.bookshop.books;
            },
            error: (e) => console.error(e)
          });
      })

    this.bookService.getAll().subscribe({
      next: (data) => {
        this.books = data;
        // this.dbGenres.forEach((g) =>{
        //   console.log(g)
        //   this.genres.push({id:g.id, name:g.name});
        // })
      },
      error: (e) => console.error(e)
    });
  }

  updateBookshop(): void {
  if (confirm('Update this author?')) {
  const data = {
    shopname: this.bookshop.shopname,
    shop_number: this.bookshop.shop_number,
    location: this.bookshop.location,
    books: this.selected,
    contact: this.bookshop.contact,
    email: this.bookshop.email,
  };

  this.bookshopService.update(this.id, data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
}
}

}

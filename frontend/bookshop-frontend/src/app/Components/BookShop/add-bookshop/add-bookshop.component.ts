import { Component, OnInit } from '@angular/core';
import {Genre} from "../../../models/genre";
import {Author} from "../../../models/author";
import {Book} from "../../../models/book";
import {BookShop} from "../../../models/bookshop";
import {BookService} from "../../../services/book.service";
import {BookshopService} from "../../../services/bookshop.service";

@Component({
  selector: 'app-add-bookshop',
  templateUrl: './add-bookshop.component.html',
  styleUrls: ['./add-bookshop.component.css']
})
export class AddBookshopComponent implements OnInit {

  location = [
    'uttara',
    'mirpur-1',
    'mirpur-10',
    'bashundhara',
    'dhanmondi',
    'banani',
    'banasree',
    'puran dhaka',
    'gulshan',
    'badda',
    'mohammedpur'
  ]

  db_books: any

  selected_books?: Book[];

  bookshop: BookShop = {
    shopname: '',
    shop_number: 0,
    location:'',
    books: [],
    contact:'',
    email: ''
  };
  submitted = false;

  constructor(private bookService: BookService, private bookshopService: BookshopService) { }

  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe({
        next: (data) => {
          this.db_books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  print(): void {
    console.log(this.selected_books)
  }

  saveBookshop(): void {
    const data = {

      shopname: this.bookshop.shopname,
      shop_number: this.bookshop.shop_number,
      location: this.bookshop.location,
      books: this.selected_books,
      contact: this.bookshop.contact,
      email: this.bookshop.email,

    };


    this.bookshopService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newBookshop(): void {
    this.submitted = false;
    this.bookshop = {
      shopname: '',
      shop_number: 0,
      location:'',
      books: [],
      contact:'',
      email: ''
    };
    this.selected_books=[];

  }


}

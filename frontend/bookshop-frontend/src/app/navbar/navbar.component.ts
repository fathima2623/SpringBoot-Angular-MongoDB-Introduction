import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookShop} from "../models/bookshop";
import {Author} from "../models/author";
import {AuthorServicesService} from "../services/author-services.service";
import {BookService} from "../services/book.service";
import {BookshopService} from "../services/bookshop.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title='';
  bookshops?: BookShop[];
  books?: Book[];
  authors?: Author[];


  constructor(private bookService : BookService, private bookshopService: BookshopService, private authorService: AuthorServicesService) { }

  ngOnInit(): void {


  }
  searchResult: Array<any> = [];
  searchall(): void {

    this.bookshopService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.bookshops = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

    this.bookService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.books = data;

          console.log(data);
        },
        error: (e) => console.error(e)




      });

    this.authorService.findByName(this.title)
      .subscribe({
        next: (data) => {
          this.authors = data;

          console.log(data);
        },
        error: (e) => console.error(e)});

    let x = document.getElementById("myDIV");
    // @ts-ignore

    x.style.display = "block";


  }






}

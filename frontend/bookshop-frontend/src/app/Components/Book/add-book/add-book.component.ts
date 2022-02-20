import { Component, OnInit } from '@angular/core';
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";
import {Genre} from "../../../models/genre";
import {GenreService} from "../../../services/genre.service";
import {Book} from "../../../models/book";

import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  db_genres: any

  db_authors: any



  selected_genres?: Genre[];
  selected_authors?: Author[];

  book: Book = {
    title: '',
    price: 0,
    year_of_publishing:0,
    publisher:'',
    genre: [],
    author: []


  };
  submitted = false;




  constructor(private authorService: AuthorServicesService,private genreService: GenreService,private bookService: BookService) { }


  ngOnInit(): void {
    this.genreService.getAll()
      .subscribe({
        next: (data) => {
          this.db_genres = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

    this.authorService.getAll()
      .subscribe({
        next: (data) => {
          this.db_authors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  print(): void {
    console.log(this.selected_genres)
    console.log(this.selected_authors)
  }

  saveBook(): void {
    const data = {
      title: this.book.title,
      price: this.book.price,
      year_of_publishing: this.book.year_of_publishing,
     publisher: this.book.publisher,
      genre: this.selected_genres,
      author: this.selected_authors
    };


    this.bookService.create(data)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }



  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      price: 0,
      year_of_publishing: 0,
      publisher: '',
      genre: [],
      author: []
    };
    this.selected_genres=[];
this.selected_authors=[];
  }

}

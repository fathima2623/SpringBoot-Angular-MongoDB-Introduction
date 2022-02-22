import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, Params} from "@angular/router";
import {GenreService} from "../../../services/genre.service";
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  selected: any;
  selected_authors: any;
  genres: any;
  authors: any;

  id?: string;
  book = new Book();
  submitted = false;

  constructor(private authorService: AuthorServicesService, private route: ActivatedRoute, private genreService: GenreService, private bookService:BookService) {
  }


  ngOnInit(): void {
    this.book = new Book()

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()];
        this.bookService.get(this.id)
          .subscribe({
            next: (data) => {
              this.book = data;
              this.selected = this.book.genre
            },
            error: (e) => console.error(e)
          })});



   this.genreService.getAll()
          .subscribe({
             next: (data) => {
            this.genres = data;
  // this.dbGenres.forEach((g) =>{
  //   console.log(g)
  //   this.genres.push({id:g.id, name:g.name});
  // })
},
error: (e) => console.error(e)
});


  this.authorService.getAll()
.subscribe({
             next: (data) => {
  this.authors = data;
  // this.dbGenres.forEach((g) =>{
  //   console.log(g)
  //   this.genres.push({id:g.id, name:g.name});
  // })
},
error: (e) => console.error(e)
});
}

updateBook(): void {
  if (confirm('Update this author?')) {
  const data = {
    title: this.book.title,
    price: this.book.price,
    year_of_publishing: this.book.year_of_publishing,
    publisher: this.book.publisher,
    genre: this.selected,
    author: this.selected_authors,
    image: this.book.image
  };

  this.bookService.update(this.id, data)
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

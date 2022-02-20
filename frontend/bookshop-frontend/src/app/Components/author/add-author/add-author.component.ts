import { Component, OnInit } from '@angular/core';
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";
import {Genre} from "../../../models/genre";
import {GenreService} from "../../../services/genre.service";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  db_genres: any

  selected_genres?: Genre[];
  author: Author = {
    name: '',
    age: 0,
    email:'',
    phone: '',
    genre: [],
  };
  submitted = false;





  constructor(private authorService: AuthorServicesService,private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAll()
      .subscribe({
        next: (data) => {
          this.db_genres = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  print(): void {
    console.log(this.selected_genres)
  }

  saveAuthor(): void {
    const data = {
      name: this.author.name,
      age: this.author.age,
      email: this.author.email,
      phone: this.author.phone,
      genre: this.selected_genres
    };

    this.authorService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }



  newAuthor(): void {
    this.submitted = false;
    this.author = {
      name: '',
      age: 0,
      email: '',
      phone: '',
      genre: []
    };

    this.selected_genres=[];
  }





}

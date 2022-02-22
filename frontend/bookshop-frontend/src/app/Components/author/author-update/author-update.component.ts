import { Component, OnInit } from '@angular/core';
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";
import {ActivatedRoute, Params} from "@angular/router";
import {GenreService} from "../../../services/genre.service";

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent implements OnInit {

  selected: any;
  genres: any;

  id?: string;
  author = new Author();
  submitted = false;

  constructor(private authorService: AuthorServicesService,
              private route: ActivatedRoute,
              private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.author = new Author()

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()];
        this.authorService.get(this.id)
          .subscribe({
            next: (data) => {
              this.author = data;
              this.selected = this.author.genre
            },
            error: (e) => console.error(e)
          });
      }
    );

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
  }

  updateAuthor(): void {
    if (confirm('Update this author?')) {
      const data = {
        name: this.author.name,
        age: this.author.age,
        email: this.author.email,
        phone: this.author.phone,
        genre: this.selected,
        image: this.author.image
      };

      this.authorService.update(this.id, data)
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

import { Component, OnInit } from '@angular/core';
import {Author} from "../../../models/author";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthorServicesService} from "../../../services/author-services.service";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  id?: string;
  author = new Author();

  constructor(private route: ActivatedRoute, private router: Router, private authorService: AuthorServicesService) { }

  ngOnInit(): void {
    this.author = new Author()

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()];
        this.authorService.get(this.id)
          .subscribe({
            next: (data) => {
              this.author = data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });
      }
    );
  }


  deleteAuthor(id: string) {
    if (confirm('Delete author?')) {
      this.authorService.delete(id)
        .subscribe({
          next: (data) => {
            this.author = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
      this.router.navigate(['/author-list']).then(() => {
      });
    }
  }

  updateAuthor(id: string) {
    this.router.navigate(['/update-author', id]).then(() => {
    });
  }

}

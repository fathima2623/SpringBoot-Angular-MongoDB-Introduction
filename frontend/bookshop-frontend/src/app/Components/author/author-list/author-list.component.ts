import { Component, OnInit } from '@angular/core';
import {Author} from "../../../models/author";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthorServicesService} from "../../../services/author-services.service";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors?: Author[];
  currentAuthor: Author = {};
  currentIndex = -1;
  name = '';

  //dtOptions: DataTables.Settings = {};


  constructor(private authorService: AuthorServicesService) {
  }

  ngOnInit(): void {
    this.getAllAuthors();
   // this.dtOptions = {
    //  processing: true,
     // paging: true,
     // pageLength: 5,
     // responsive: true,
   // };
  }

  getAllAuthors(): void {
    this.authorService.getAll()
      .subscribe({
        next: (data) => {
          this.authors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.getAllAuthors();
    this.currentAuthor = {};
    this.currentIndex = -1;
  }

  removeAllAuthors(): void {
    if (confirm('Are you sure you want to delete all authors')) {
      this.authorService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  }

  searchAuthorByName(): void {
    this.currentAuthor = {};
    this.currentIndex = -1;

    this.authorService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.authors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

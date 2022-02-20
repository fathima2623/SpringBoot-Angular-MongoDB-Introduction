import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {ActivatedRoute,Params,Router} from "@angular/router";
import {BookService} from "../../../services/book.service";
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id?: string;
  book = new Book();

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }



  ngOnInit(): void {
    this.book = new Book()

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()];
        this.bookService.get(this.id)
          .subscribe({
            next: (data) => {
              this.book= data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });
      }
    );
  }

  deleteBook(id: string) {
    if (confirm('Delete author?')) {
      this.bookService.delete(id)
        .subscribe({
          next: (data) => {
            this.book = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
      this.router.navigate(['/book-list']).then(() => {
      });
    }
  }

  updateBook(id: string) {
    this.router.navigate(['/update-book', id]).then(() => {
    });
  }

}

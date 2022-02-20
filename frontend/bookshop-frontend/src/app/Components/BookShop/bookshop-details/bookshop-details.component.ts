import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../../models/bookshop";
import {ActivatedRoute,Params,Router} from "@angular/router";
import {BookshopService} from "../../../services/bookshop.service";
import {Book} from "../../../models/book";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-bookshop-details',
  templateUrl: './bookshop-details.component.html',
  styleUrls: ['./bookshop-details.component.css']
})
export class BookshopDetailsComponent implements OnInit {

  id?: string;
  bookshop = new BookShop();

  constructor(private route: ActivatedRoute, private router: Router, private bookshopService: BookshopService) { }

  ngOnInit(): void {
    this.bookshop = new BookShop()

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()];
        this.bookshopService.get(this.id)
          .subscribe({
            next: (data) => {
              this.bookshop= data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });
      }
    );
  }

  deleteBookshop(id: string) {
    if (confirm('Delete bookshop?')) {
      this.bookshopService.delete(id)
        .subscribe({
          next: (data) => {
            this.bookshop = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
      this.router.navigate(['/bookshop-list']).then(() => {
      });
    }
  }

  updateBookshop(id: string) {
    this.router.navigate(['/update-bookshop', id]).then(() => {
    });
  }

}

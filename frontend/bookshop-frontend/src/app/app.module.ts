import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { AddAuthorComponent } from './Components/author/add-author/add-author.component';
import { AuthorDetailsComponent } from './Components/author/author-details/author-details.component';
import { AuthorListComponent } from './Components/author/author-list/author-list.component';
import { AuthorUpdateComponent } from './Components/author/author-update/author-update.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
//import {DataTablesModule} from "angular-datatables";
import {NgSelectModule} from "@ng-select/ng-select";
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    AuthorUpdateComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
   // DataTablesModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

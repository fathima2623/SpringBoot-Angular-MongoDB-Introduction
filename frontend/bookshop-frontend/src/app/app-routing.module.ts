import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {AddAuthorComponent} from "./Components/author/add-author/add-author.component";
import {AuthorListComponent} from "./Components/author/author-list/author-list.component";
import {AuthorUpdateComponent} from "./Components/author/author-update/author-update.component";
import {AuthorDetailsComponent} from "./Components/author/author-details/author-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'author-list',component: AuthorListComponent},
  {path: 'author-details/:id',component: AuthorDetailsComponent},
  {path: 'update-author/:id',component: AuthorUpdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

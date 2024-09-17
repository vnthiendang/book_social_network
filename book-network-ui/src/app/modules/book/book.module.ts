import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {MainComponent} from "./pages/main/main.component";
import {MenuComponent} from "./components/menu/menu.component";
import {BookListComponent} from "./pages/book-list/book-list.component";
import {BookCardComponent} from "./components/book-card/book-card.component";
import {BookDetailsComponent} from "./pages/book-details/book-details.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookRoutingModule,
    MainComponent,
    MenuComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailsComponent
  ]
})
export class BookModule { }

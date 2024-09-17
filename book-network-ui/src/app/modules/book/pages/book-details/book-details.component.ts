import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BookResponse} from "../../../../services/models/book-response";
import {BookService} from "../../../../services/services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit{
  book: BookResponse = {};
  // feedbacks: PageResponseFeedbackResponse = {};
  page = 0;
  size = 5;
  pages: any = [];
  private bookId = 0;

  constructor(
    private bookService: BookService,
    // private feedbackService: FeedbackService,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    if (this.bookId) {
      this.bookService.findBookById({
        'book-id': this.bookId
      }).subscribe({
        next: (book) => {
          this.book = book;
          // this.findAllFeedbacks();
        }
      });
    }
  }
  gotToPage(page: number){
    this.page = page;
  }
  goToFirstPage(){
    this.page = 0;
  }
  goToPreviousPage(){
    this.page --;
  }
  goToLastPage() {}
  goToNextPage() {
    this.page++;
  }
  get isLastPage(){
    return this.page ;
  }
}

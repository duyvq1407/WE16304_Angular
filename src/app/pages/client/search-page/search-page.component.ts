import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  q: string = '';
  books: IBook[] =[]
  constructor(
    private route : ActivatedRoute,
    private bookService: BookService,
    private router: Router,
  ) {
    this.q = this.route.snapshot.queryParams['q']
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    this.bookService.searchBook(this.q).subscribe(data => {
      console.log(data)
      this.books = data
    })
  }

}

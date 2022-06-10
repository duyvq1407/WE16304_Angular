import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/Book';
import { IProduct } from 'src/app/models/Product';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: IBook[] = []
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books = data
      console.log(data)
    })
  }

}
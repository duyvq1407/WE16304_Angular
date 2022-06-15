import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
import { IBook } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  detailBook: IBook;
  bookRelated: IBook[] = [];
  idFromUrl: string = this.route.snapshot.params['id'];
  cartItemValue: number = 1;
  constructor(
    private bookService: BookService,
    private cateService: CategoryService,
    private route : ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router,
    private toastr: ToastrService
    ) { 
      this.detailBook = {
        _id: '',
        name: '',
        image_url: '',
        price: 0,
        status: 0
      }
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit(): void {
    this.bookService.getBook(this.idFromUrl).subscribe((data) => {
      this.detailBook = data
      this.cateService.getCategory(data.category_id!).subscribe((data2) => {
        this.bookRelated = data2.books.filter(item => item._id != data._id)
      });
    });
  }

  onInputValue = (event: any) => {
    this.cartItemValue = event.target.value
  }

  onAddToCart = () => {
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      _id: this.detailBook._id,
      name: this.detailBook.name,
      price: this.detailBook.price,
      sale_price: this.detailBook.sale_price,
      image_url: this.detailBook.image_url,
      quantity: +this.cartItemValue
    };
    this.localStorageService.setItem(addItem)
    this.toastr.success("Thêm vào giỏ hàng thành công")
    this.cartItemValue = 1;
  }
}

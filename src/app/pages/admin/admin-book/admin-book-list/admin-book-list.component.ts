import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IBook } from 'src/app/models/Book';
import { ICategory } from 'src/app/models/Category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books : IBook[] =[];
  categories: ICategory[] = [];
  page: number = 0
  constructor(
    private cateService: CategoryService,
    private bookService: BookService,
    private toastr: ToastrService
    ) { 
  }

  ngOnInit(): void {
    this.onGetList();
    this.cateService.getCategories().subscribe((data) => {
      this.categories = data
    });
    this.page = this.books.length
  }

  onGetList = () => {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data
    });
  }
  // onUpdatedStatus(newStatus: number,id: string){
  //   this.bookService.editBook({status: newStatus}, id).subscribe(()=>{
  //     this.onGetList()
  //   })
  // }
  onRemoveItem = (id: string) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm && id) {
      this.toastr.success("Xóa thành công")
      // call api xoa
      this.bookService.removeBook(id).subscribe(() => {
        // reRender
        this.onGetList();
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory, ICategoryDetail } from 'src/app/models/Category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-book-cate-detail',
  templateUrl: './admin-book-cate-detail.component.html',
  styleUrls: ['./admin-book-cate-detail.component.css']
})
export class AdminBookCateDetailComponent implements OnInit {
  cateDetail: ICategoryDetail = {category: {status: 0}, books: []}
  id: string = this.route.snapshot.params['id'];
  page: number = 1
  constructor(
    private cateService: CategoryService,
    private bookService: BookService,
    private toastr: ToastrService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.onGetList(this.id);
  }

  onGetList = (id:string) => {
    this.cateService.getCategory(id).subscribe((data) => {
      this.cateDetail = data
    });
  }
  onUpdatedStatus(newStatus: number,id: string){
    this.bookService.editBook({status: newStatus}, id).subscribe(()=>{
      this.onGetList(this.id)
    })
  }
  onRemoveItem = (id: string) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm && id) {
      this.toastr.success("Xóa thành công")
      // call api xoa
      this.bookService.removeBook(id).subscribe(() => {
        // reRender
        this.onGetList(this.id);
      });
    }
  }

}

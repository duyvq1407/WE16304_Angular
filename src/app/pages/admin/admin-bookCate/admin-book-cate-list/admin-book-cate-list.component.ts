import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-book-cate-list',
  templateUrl: './admin-book-cate-list.component.html',
  styleUrls: ['./admin-book-cate-list.component.css']
})
export class AdminBookCateListComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(
    private cateService: CategoryService,
    private toastr: ToastrService
    ) { 
  }

  ngOnInit(): void {
    this.onGetList();
    this.cateService.getCategories().subscribe((data) => {
      this.categories = data
    });
  }

  onGetList = () => {
    this.cateService.getCategories().subscribe((data) => {
      this.categories = data
    });
  }
  onUpdatedStatus(newStatus: number,id: string){
    this.cateService.editCategory({status: newStatus}, id).subscribe(()=>{
      this.onGetList()
    })
  }
  onRemoveItem = (id: string) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm && id) {
      this.toastr.success("Xóa thành công")
      // call api xoa
      this.cateService.removeCategory(id).subscribe(() => {
        // reRender
        this.onGetList();
      });
    }
  }

}

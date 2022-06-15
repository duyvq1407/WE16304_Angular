import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/models/Category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-book-cate-form',
  templateUrl: './admin-book-cate-form.component.html',
  styleUrls: ['./admin-book-cate-form.component.css']
})
export class AdminBookCateFormComponent implements OnInit {
  categoryForm: FormGroup;
  constructor(
    private cateService: CategoryService,
    private toastr: ToastrService,
    private router: Router,
    private route : ActivatedRoute
    ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)],), // FormControl(giá trị mặc định)
      status: new FormControl(1, [Validators.required])
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id) {
      this.cateService.getCategory(id).subscribe((data) => {
        this.categoryForm.patchValue({
          name: data.category.name,
          status: data.category.status
        });
      })
    }
  }
  redirectToList(){
    setTimeout(()=>{
      this.router.navigateByUrl('/admin/categories')
    }, 2000)
  }

  onSubmit = () => {
    const id = this.route.snapshot.params['id'];
    //Nhận dữ liệu từ form => this.productForm.value
    const data = {...this.categoryForm.value};
    // Call api thêm mới
    if (id) {
      return this.cateService.editCategory(data, id).subscribe(() => {
        this.toastr.success("Sửa thành công")
        this.redirectToList()
      })
    }
    return this.cateService.addCategory(data).subscribe(() => {
      this.toastr.success("Thêm thành công")
      this.redirectToList()
    })
  }

}

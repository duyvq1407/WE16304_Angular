import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/models/Category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-book-form',
  templateUrl: './admin-book-form.component.html',
  styleUrls: ['./admin-book-form.component.css']
})
export class AdminBookFormComponent implements OnInit {
  bookForm: FormGroup;
  categoryList: ICategory[] = [];
  constructor(
    private bookService: BookService,
    private cateService: CategoryService,
    private toastr: ToastrService,
    private router: Router,
    private route : ActivatedRoute
    ) {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)],), // FormControl(giá trị mặc định)
      price: new FormControl(0, [Validators.required, Validators.min(1)]), // FormControl(giá trị mặc định)
      sale_price: new FormControl(0),
      description: new FormControl(''),
      image_url: new FormControl(''),
      category_id: new FormControl('',[Validators.required]),
      status: new FormControl(0)
    });
  }
  ngOnInit(): void {
    this.cateService.getCategories().subscribe(data => {
      this.categoryList = data
    })

    const id = this.route.snapshot.params['id'];
    if(id) {
      this.bookService.getBook(id).subscribe((data) => {
        console.log(data)
        this.bookForm.patchValue({
          name: data.name,
          price: data.price,
          sale_price: data.sale_price,
          image_url: data.image_url,
          category_id: data.category_id,
          description: data.description,
          status: data.status
        });
      })
    }
  }
  redirectToList(){
    setTimeout(()=>{
      this.router.navigateByUrl('/admin/books')
    }, 2000)
  }

  onSubmit = () => {
    const id = this.route.snapshot.params['id'];
    //Nhận dữ liệu từ form => this.productForm.value
    const data = {...this.bookForm.value, category_id: this.bookForm.controls?.['category_id'].value};
    // Call api thêm mới
    if (id) {
      return this.bookService.editBook(data, id).subscribe(() => {
        this.toastr.success("Sửa thành công")
        this.redirectToList()
      })
    }
      return this.bookService.addBook(data).subscribe(() => {
        this.toastr.success("Thêm thành công")
        this.redirectToList()
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private route : ActivatedRoute
    ) { 
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100), this.onValidateNameHasProduct],), // FormControl(giá trị mặc định)
      price: new FormControl(0, [Validators.required, Validators.min(1)]), // FormControl(giá trị mặc định)
      image: new FormControl(''), // FormControl(giá trị mặc định)
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id) {
      this.productService.readProduct(id).subscribe((data) => {
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          image: data.image
        });
      })
    }
  }

  onSubmit = () => {
    const id = this.route.snapshot.params['id'];
    //Nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    // Call api thêm mới
    if (id) {
      this.productService.editProduct(data, id).subscribe(data => {
        this.toastr.success("Sửa thành công")
        setTimeout(()=>{
          this.router.navigateByUrl('/admin/products')
        }, 2000)
      })
    } else {
      this.productService.addProduct(data).subscribe(data => {
        this.toastr.success("Thêm thành công")
        setTimeout(()=>{
          this.router.navigateByUrl('/admin/products')
        }, 2000)
      })
    }
  }

  onValidateNameHasProduct (control: AbstractControl) : ValidationErrors|null{
    const inputValue = control.value;
    if (!inputValue.includes("Product")) {
      return {hasProductError: true}
    }
    return null
  }

}

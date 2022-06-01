import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
    ) { 
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]), // FormControl(giá trị mặc định)
      price: new FormControl(0, [Validators.required, Validators.min(1)]), // FormControl(giá trị mặc định)
      image: new FormControl(''), // FormControl(giá trị mặc định)
    });
  }
  ngOnInit(): void {
  }

  onSubmit = () => {
    console.log(this.productForm.value)
    //Nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    // Call api thêm mới
    this.productService.addProduct(data).subscribe(data => {
      alert("Thêm thành công");
      setTimeout(()=>{
        this.router.navigateByUrl('/admin/products')
      }, 2000)
    })
  }

}

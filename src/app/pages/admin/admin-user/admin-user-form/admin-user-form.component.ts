import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css']
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  id = this.route.snapshot.params['id'];
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private route : ActivatedRoute
    ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)],), // FormControl(giá trị mặc định)
      email: new FormControl('', [Validators.required, Validators.email]), // FormControl(giá trị mặc định)
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(32)]),
      role: new FormControl(0, Validators.required),
      status: new FormControl(1, Validators.required)
    });
  }
  ngOnInit(): void {  
    const id = this.route.snapshot.params['id'];
    if(id) {
      this.userService.getUser(id).subscribe((data) => {
        console.log(data)
        this.userForm.patchValue({
          name: data.name,
          email: data.email,
          role: data.role,
          status: data.status
        });
      })
    }
  }
  redirectToList(){
    setTimeout(()=>{
      this.router.navigateByUrl('/admin/users')
    }, 2000)
  }

  onSubmit = () => {
    const data = this.userForm.value
    const id = this.route.snapshot.params['id'];
    // Call api thêm mới
    if (id) {
      return this.userService.editUsers(data, id).subscribe(() => {
        this.toastr.success("Sửa thành công")
        this.redirectToList()
      })
    }
    return this.userService.register(data).subscribe(() => {
      this.toastr.success("Thêm thành công")
      this.redirectToList()
    })
  }

}

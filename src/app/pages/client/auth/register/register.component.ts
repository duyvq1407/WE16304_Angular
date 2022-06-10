import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ActiveToast, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.userForm.value;
    console.log(data)
    this.userService.register(data).subscribe(() => {
      this.toastr.success("Đăng ký thành công")
      setTimeout(()=>{
        this.router.navigateByUrl('/account/signin')
      }, 2000)
    })
  }

}

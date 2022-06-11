import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.loginForm.value;
    this.userService.login(data).subscribe((user) => {
        localStorage.setItem('LogedInUser', JSON.stringify(user))
        this.toastr.success("Đăng nhập thành công")
        setTimeout(()=>{
          this.router.navigateByUrl('/account')
        }, 2000)    
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/models/Auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: IUser = {name: '',email: '', status: 1}
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('LogedInUser') as string).user
    if(data){
      this.user = data
    }else{
      this.user = {name: '',email: '', status: 1}
    }
  }

  onLogOut(){
    const confirm = window.confirm("Bạn có chắc chắn đăng xuất?")
    if(confirm){
      this.toastr.success("Đăng xuất thành công")
      localStorage.removeItem('LogedInUser')
      this.router.navigateByUrl('/')
    }
  }
}

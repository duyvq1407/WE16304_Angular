import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  userName: string = '';
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('LogedInUser') as string)
    this.userName = user.user.name
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

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/models/Auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: IUser[] = [];
  constructor(
    private userService: UserService,
    private toastr: ToastrService
    ) { 
  }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList = () => {
    this.userService.getUsers().subscribe((data) => {
      this.users = data
    });
  }
  onUpdatedStatus(newStatus: number,id: string){
    this.userService.editUsers({status: newStatus}, id).subscribe(()=>{
      this.onGetList()
    })
  }
  onRemoveItem = (id: string) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm && id) {
      this.toastr.success("Xóa thành công")
      // call api xoa
      this.userService.removeUser(id).subscribe(() => {
        // reRender
        this.onGetList();
      });
    }
  }


}

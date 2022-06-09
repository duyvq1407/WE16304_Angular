import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  userName: string = '';
  constructor() { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('LogedInUser') as string)
    console.log(user)
    this.userName = user.user.name
  }

}

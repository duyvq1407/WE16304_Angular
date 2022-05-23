import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name:"Vũ Quang Duy",
      age: 20,
      email: "user1@fpt.vn",
      sdt: "0975382918",
      avatar: "https://i.pinimg.com/236x/2e/d5/8f/2ed58f81f11e527c2023dfa7f5a49b4d.jpg"
    },
    {
      id: 12,
      name:"Vũ Quang Duy",
      age: 30,
      email: "user2@fpt.vn",
      sdt: "0975382918",
      avatar: "https://i.pinimg.com/236x/8c/b2/12/8cb21278494759a04c6d46834b83c1d1.jpg"
    },
    {
      id: 2,
      name:"Vũ Quang Duy",
      age: 45,
      email: "user3@fpt.vn",
      sdt: "0975382918",
      avatar: "https://i.pinimg.com/236x/35/b9/77/35b9775a6445e4295065b39b0e92eb66.jpg"
    }
  ]
  inputValues = {
    id: 0,
    name:"",
    age: 0,
    email: "",
    sdt: "",
    avatar: ""

  }
  onSubmit = (userForm: NgForm) => { // Nhận toàn bộ form
    // Lấy ra id lớn nhất
    const userIds = this.users.map((item) => item.id).sort((a,b) => a-b)
    const newId = userIds[userIds.length - 1]+1;
    // Thêm vào bảng
    const FormData = userForm.value// Lấy giá trị của form
    if (this.inputValues.id === 0) { // nêú id của inputValues = 0 thì thêm, khác 0 thì sửa
      //Thêm sản phẩm
      this.users.push({
        ...FormData, 
        id: newId,
        age: +FormData.age
      })
    } else {
      // Chỉnh sửa
      this.users = this.users.map((item) => item.id === this.inputValues.id ? {...FormData, id: item.id} : item)
      console.log(this.users)
    }
    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: ''
    })      
  }
  onRemove = (userId : number) => {
    this.users = this.users.filter(user => user.id !== userId)
  }
  onEdit = (userId : number) => {
    const editUser = this.users.find(item => item.id === userId)
    if(editUser){
      this.inputValues = {...editUser}
    }
  }

}

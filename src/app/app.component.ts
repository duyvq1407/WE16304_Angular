import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  identity = "PH18088"
  title = 'WE16304_Angular';
  name = 'Vũ Quang Duy';
  age = '18';
  students = [
    {
      id: 'ph1',
      name: 'Student 1',
      status: 0
    },
    {
      id: 'ph2',
      name: 'Student 2',
      status: 1
    },
    {
      id: 'ph3',
      name: 'Student 3',
      status: 0
    },
  ]
  teachers = [
    {
      id: 'PH1234',
      name: 'Teacher 1',
      age: 20,
      gender: 0,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxekghgcizx9iOtfgMfM7Ln4keSFjAQk7trQ&usqp=CAU",
      status: 0
    },
    {
      id: 'PH2234',
      name: 'Teacher 2',
      age: 20,
      gender: 1,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxekghgcizx9iOtfgMfM7Ln4keSFjAQk7trQ&usqp=CAU",
      status: 1
    },
    {
      id: 'PH3234',
      name: 'Teacher 3',
      age: 20,
      gender: 0,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxekghgcizx9iOtfgMfM7Ln4keSFjAQk7trQ&usqp=CAU",
      status: 0
    }
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  myProp: string = 'My Property';
  myBool: boolean = false;
  myNum: number = 20.3;

  empList: any[] = [
  {
    empId : 1001,
    empName : 'Ram',
    empSalary : 10
  },
  {
    empId : 1002,
    empName : 'Fam',
    empSalary : 20
  },
  {
    empId : 1003,
    empName : 'Sham',
    empSalary : 30
  }
];

  ngOnInit() {
  }

  myFuction(): void {
    console.log('myFuction called');
  }

}

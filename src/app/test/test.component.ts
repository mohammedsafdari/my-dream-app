import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls : ['./test.component.css']
})
export class TestComponent {

    title = 'Welcome to angular!';
    myNum = 123.456;

    employee: any = {
        empId : 1001,
        empName : 'Ram',
        empSalary : 10000
    };

    date: Date = new Date;

    employees: any[] = [
        {empId:1001, empName:'Adam', empSalary: 10, gender: 'male'},
        {empId:1002, empName:'Eve', empSalary: 20, gender: 'female'},
        {empId:1003, empName:'Noah', empSalary: 30, gender: 'male'},
        {empId:1004, empName:'Mary', empSalary: 40, gender: 'female'},
        {empId:1005, empName:'Jesus', empSalary: 50, gender: 'male'},
        {empId:1006, empName:'Mohammed', empSalary: 60, gender: 'male'}
    ];

}

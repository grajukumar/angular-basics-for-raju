import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstname:string="Ammulu";
  lastname:string="A";
  gender:string="female";
  age:number=10;
  constructor() { }

  ngOnInit() {
  }

}

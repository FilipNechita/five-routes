import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

@Input() department : any;
  constructor() { }
employee='Filip';
  ngOnInit(): void {
  }

}

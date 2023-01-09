import { EmployeesComponent } from './../employees.component';
import { EmployeesService } from './../services/employees.service';
import { Component } from '@angular/core';
import { EmployeeList } from 'src/app/data-model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent {
  
  newemp: EmployeeList = {
    Eid: 0,
    Ename: '',
    companyId: 0,
    departmentId: 0,
    salaryId: 0,
    regDate: new Date('07-jan-2023'),
  };

  constructor(private employeeCmp: EmployeesComponent) { }

  addNewEmp() {
    this.employeeCmp.addEmp()
  }
  // editEmp(valueD: EmployeeList){
  //   this.newemp = valueD;
  // }
}

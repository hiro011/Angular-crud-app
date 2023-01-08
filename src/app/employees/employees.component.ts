import { Component, OnInit } from '@angular/core';
import { EmployeeList } from './employees';
import { EmployeesService } from './services/employees.service';
import { JsonPipe } from '@angular/common';

// interface myData {
//   obj: Object
// }

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit{

  hideEmployees = false;

  employeeList1 : EmployeeList[] = [];
  employeeList: any[] = [];
  companyList: any[] = [];
  departmentList: any[] = [];
  salaryList: any[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void{
    this.employeesService.getEmployees().subscribe((data: any) =>{
      console.log("we got", data);
      this.employeeList = data;
    });
    this.employeesService.getCompany().subscribe((data: any) =>{
      console.log("we got", data);
      this.companyList = data;
    });
    this.employeesService.getDepartment().subscribe((data: any) =>{
      console.log("we got", data);
      this.departmentList = data;
    });
    this.employeesService.getSalary().subscribe((data: any) =>{
      console.log("we got", data);
      this.salaryList = data;
    });
    // this.employeeList = this.employeesService.getEmployees()
  }

  toggle() {
    this.hideEmployees = !this.hideEmployees;
  }
  addEmp(){
    const emp: EmployeeList = {
      Eid: 8,
      Ename: 'aliseid',
      companyId: 1,
      departmentId: 2,
      salaryId: 1,
      regDate: new Date('07-jan-2023'),
    };
    // this.employeeList.push(emp);
    this.employeeList = [...this.employeeList, emp];
  }
  editEmp(emp: any){
    window.alert(emp.Ename)
  }
  deleteEmp(id : number){
    window.alert(id)
  }
}

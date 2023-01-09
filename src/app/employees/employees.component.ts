import { EmployeeList } from 'src/app/data-model';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './services/employees.service';
import { ViewService } from '../view.service';

// interface myData {
//   obj: Object
// }

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  successAlert = false;
  updateAlert = false;
  deleteAlert = false;
  hideNewEmp = true;
  updateE = false;

  employeeList1: EmployeeList[] = [];
  employeeList: any[] = [];
  companyList: any[] = [];
  departmentList: any[] = [];
  salaryList: any[] = [];

  constructor(
    private viewService: ViewService,
    private employeesService: EmployeesService,
    // private newEmloyee: NewEmployeeComponent,
  ) { }

  ngOnInit(): void {
    this.viewService.getEmployees().subscribe((data: any) => {
      this.employeeList = data;
    });
    this.viewService.getCompany().subscribe((data: any) => {
      this.companyList = data;
    });
    this.viewService.getDepartment().subscribe((data: any) => {
      this.departmentList = data;
    });
    this.viewService.getSalary().subscribe((data: any) => {
      this.salaryList = data;
    });
  }

  hideAlert() {
    this.successAlert = false;
    this.updateAlert = false;
    this.deleteAlert = false;
  }

  newEmpForm() {
    this.hideNewEmp = !this.hideNewEmp;
    this.updateE = false;
  }

  newemp: EmployeeList = {
    Eid: 0,
    Ename: '',
    companyId: 0,
    departmentId: 0,
    salaryId: 0,
    regDate: new Date('07-jan-2023'),
  };

  addEmp() {
    // this.employeeList.push(emp);
    
    this.employeesService.creatEmployees(this.newemp)
      .subscribe((ret) => {
        console.log("ret data", ret)
        this.employeeList = [...this.employeeList, ret];
      })
    this.successAlert = true
    this.newEmpForm()
  }
  editEmp(emp: EmployeeList) {

    this.newemp = emp;
    this.hideNewEmp = true;
    this.updateE = true;
  }
  deleteEmp(id: number) {
    this.employeesService.deleteEmployee(id)
    .subscribe((ret)=>{
      console.log("deleted ret: ", ret)
    })
    this.deleteAlert = true
    // window.alert(id)
  }
  updateEmp() {
    this.employeesService.updateEmployee(this.newemp)
    .subscribe((ret)=>{
      console.log("ret updated: ", ret)
    })

    // this.employeeList = [...this.employeeList, this.newemp];
    this.updateAlert = true
    this.newEmpForm()
  }
}

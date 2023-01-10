import { DBOperation } from './../db-operation';
import { CompanyList, DepartmentList, SalaryList, EmployeeList } from './../data-model';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './services/employees.service';
import { ViewService } from '../view.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  hideNew = true;
  indexId = 5;
  submitted: boolean = false;
  buttonTxt: string = '';
  dbops: DBOperation;


  employeeList: EmployeeList[] = [];
  companyList: CompanyList[] = [];
  departmentList: DepartmentList[] = [];
  salaryList: SalaryList[] = [];

  addFrom: FormGroup;

  constructor(
    private viewService: ViewService,
    private employeesService: EmployeesService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.setFormState();
  }

  getData() {
    this.viewService.getEmployees().subscribe((data: any) => {
      console.log(data);
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

  setFormState() {
    this.buttonTxt = 'Save';
    this.dbops = DBOperation.add;

    this.addFrom = new FormGroup({
      id: new FormControl(this.indexId),
      Ename: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
      companyId: new FormControl(0, Validators.compose([Validators.required, Validators.min(1)])),
      departmentId: new FormControl(0, Validators.compose([Validators.required, Validators.min(1)])),
      salaryId: new FormControl(0, Validators.compose([Validators.required, Validators.min(1)])),
      regDate: new FormControl(Date())
    })
  }

  hideNewForm() {
    this.hideNew = !this.hideNew;
  }

  get ctrl() {
    return this.addFrom.controls
  }

  resetForm() {
    this.submitted = false;
    this.addFrom.reset();
    this.addFrom.get('id')?.setValue(this.indexId)
    this.addFrom.get('regDate')?.setValue(new Date())

    this.buttonTxt = 'Save';
    this.dbops = DBOperation.add;
  }

  addEmp() {
    this.submitted = true;

    if (this.addFrom.invalid) {
      return;
    }

    switch (this.dbops) {
      case DBOperation.add:
        this.employeesService.creatEmployees(this.addFrom.value).subscribe(res => {
          this.toastr.success("Employee Add!", "Data Adding");
          console.log(this.addFrom.value);
          this.getData();
          this.resetForm();
          this.hideNew = true;
          this.indexId++;
        });
        break;
      case DBOperation.update:
        this.employeesService.updateEmployee(this.addFrom.value).subscribe(res => {
          this.toastr.success("Employee Updated!", "Data Updating");
          this.getData();
          this.resetForm();
          this.hideNew = true;
        });
        break;

      default:
        break;
    }
  }

  edit(id: number) {
    this.buttonTxt = 'Update';
    this.dbops = DBOperation.update;

    let employee = this.employeeList.find((E: EmployeeList) => E.id === id);
    this.addFrom.patchValue(employee!);
    this.hideNew = false;
  }

  delete(id: number) {
    if (confirm("Do you want to delete?") === true) {
      this.employeesService.deleteEmployee(id).subscribe(res => {
        this.toastr.warning('Deleted Success!', 'User Registration');
        this.getData();
      })
    } else {
      this.toastr.info('Delete cancelled!', 'User Registration');
    }
  }
}

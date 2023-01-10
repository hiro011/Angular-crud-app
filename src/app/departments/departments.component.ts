import { DepartmentsService } from './services/departments.service';
import { CompanyList, DepartmentList } from './../data-model';
import { Component } from '@angular/core';
import { ViewService } from '../view.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DBOperation } from '../db-operation';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {

  hideNew = true;
  indexId = 7;
  submitted: boolean = false;
  buttonTxt: string = '';
  dbops: DBOperation;

  departmentList: DepartmentList[] = [];
  companyList: CompanyList[] = [];

  addFrom: FormGroup;

  constructor(
    private viewService: ViewService,
    private departmentService: DepartmentsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getDepartment();
    this.getData();
    this.setFormState();
  }

  getDepartment() {
    this.viewService.getDepartment().subscribe((data: any) => {
      console.log(data);
      this.departmentList = data;
    });
  }

  getData() {
    this.viewService.getCompany().subscribe((data: any) => {
      console.log(data);
      this.companyList = data;
    });
  }

  setFormState() {
    this.buttonTxt = 'Save';
    this.dbops = DBOperation.add;

    this.addFrom = new FormGroup({
      id: new FormControl(this.indexId),
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])),
      companyId: new FormControl(0, Validators.compose([Validators.required, Validators.min(1)])),
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

  add() {
    this.submitted = true;

    if (this.addFrom.invalid) {
      return;
    }

    switch (this.dbops) {
      case DBOperation.add:
        this.departmentService.creatDepartment(this.addFrom.value).subscribe(res => {
          this.toastr.success("Department Add!", "Data Adding");
          console.log(this.addFrom.value);
          this.getDepartment();
          this.resetForm();
          this.hideNew = true;
          this.indexId++;
        });
        break;
      case DBOperation.update:
        this.departmentService.updateDepartment(this.addFrom.value).subscribe(res => {
          this.toastr.success("Department Updated!", "Data Updating");
          this.getDepartment();
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

    let department = this.departmentList.find((C: DepartmentList) => C.id === id);
    this.addFrom.patchValue(department!);
    this.hideNew = false;
  }

  delete(id: number) {
    if (confirm("Do you want to delete?") === true) {
      this.departmentService.deleteDepartment(id).subscribe(res => {
        this.toastr.warning('Deleted Success!', 'User Registration');
        this.getDepartment();
      })
    } else {
      this.toastr.info('Delete cancelled!', 'User Registration');
    }
  }
}

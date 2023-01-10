import { SalaryService } from './services/salary.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SalaryList } from '../data-model';
import { DBOperation } from '../db-operation';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent {

  hideNew = true;
  indexId = 5;
  submitted: boolean = false;
  buttonTxt: string = '';
  dbops: DBOperation;

  salaryList: SalaryList[] = [];

  addFrom: FormGroup;

  constructor(
    private viewService: ViewService,
    private salaryService: SalaryService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getSalary();
    this.setFormState();
  }

  getSalary() {
    this.viewService.getSalary().subscribe((data: any) => {
      console.log(data);
      this.salaryList = data;
    });
  }

  setFormState() {
    this.buttonTxt = 'Save';
    this.dbops = DBOperation.add;

    this.addFrom = new FormGroup({
      id: new FormControl(this.indexId),
      amount: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
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
        this.salaryService.creatSalary(this.addFrom.value).subscribe(res => {
          this.toastr.success("Salary Add!", "Data Adding");
          console.log(this.addFrom.value);
          this.getSalary();
          this.resetForm();
          this.hideNew = true;
          this.indexId++;
        });
        break;
      case DBOperation.update:
        this.salaryService.updateSalary(this.addFrom.value).subscribe(res => {
          this.toastr.success("Salary Updated!", "Data Updating");
          this.getSalary();
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

    let salary = this.salaryList.find((S: SalaryList) => S.id === id);
    this.addFrom.patchValue(salary!);
    this.hideNew = false;
  }

  delete(id: number) {
    this.salaryService.deleteSalary(id).subscribe(res => {
      this.toastr.warning('Deleted Success!', 'User Registration');
      this.getSalary();
    })
  }
}

import { CompanyService } from './services/company.service';
import { Component } from '@angular/core';
import { ViewService } from '../view.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyList } from '../data-model';
import { DBOperation } from '../db-operation';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  
  hideNew = true;
  indexId = 5;
  submitted: boolean = false;
  buttonTxt: string = '';
  dbops: DBOperation;

  companyList: CompanyList[] = [];

  addFrom: FormGroup;

  constructor(
    private viewService: ViewService,
    private companyService: CompanyService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCompany();
    this.setFormState();
  }

  getCompany() {
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
        this.companyService.creatCompany(this.addFrom.value).subscribe(res => {
          this.toastr.success("Company Add!", "Data Adding");
          console.log(this.addFrom.value);
          this.getCompany();
          this.resetForm();
          this.hideNew = true;
          this.indexId++;
        });
        break;
      case DBOperation.update:
        this.companyService.updateCompany(this.addFrom.value).subscribe(res => {
          this.toastr.success("Company Updated!", "Data Updating");
          this.getCompany();
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

    let company = this.companyList.find((C: CompanyList) => C.id === id);
    this.addFrom.patchValue(company!);
    this.hideNew = false;
  }

  delete(id: number) {
    if (confirm("Do you want to delete?") === true) {
      this.companyService.deleteCompany(id).subscribe(res => {
        this.toastr.warning('Deleted Success!', 'User Registration');
        this.getCompany();
      })
    } else {
      this.toastr.info('Delete cancelled!', 'User Registration');
    }
  }
}

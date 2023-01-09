import { Component } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  constructor(private viewService: ViewService) {}
  companyList: any[] = [];

  ngAfterViewInit(): void {
    this.viewService.getCompany().subscribe((data: any) =>{
      console.log("we got", data);
      this.companyList = data;
    });
  }

  addComp(){
    
  }
  editComp(cmp: any ){
    window.alert(cmp.name)
  }
  deleteComp(id : number ){
    window.alert(id)
  }
}

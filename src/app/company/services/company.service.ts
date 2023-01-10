import { CompanyList } from './../../data-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private http: HttpClient) { }
 
  getCompanyById(id: number) {
    return this.http.get(`${this.SERVER_URL}companies/${id}`);
  }
  creatCompany(company: CompanyList) {
    return this.http.post(`${this.SERVER_URL}companies`, company);
  }
  updateCompany(company: CompanyList) {
    return this.http.put(`${this.SERVER_URL}companies/${company.id}`, company)
  }
  deleteCompany(id: number) {
    return this.http.delete(`${this.SERVER_URL}companies/${id}`)
  }
}

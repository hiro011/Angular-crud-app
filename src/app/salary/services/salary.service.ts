import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalaryList } from 'src/app/data-model';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private http: HttpClient) { }
 
  getSalaryById(id: number) {
    return this.http.get(`${this.SERVER_URL}salaries/${id}`);
  }
  creatSalary(salary: SalaryList) {
    return this.http.post(`${this.SERVER_URL}salaries`, salary);
  }
  updateSalary(salary: SalaryList) {
    return this.http.put(`${this.SERVER_URL}salaries/${salary.id}`, salary)
  }
  deleteSalary(id: number) {
    return this.http.delete(`${this.SERVER_URL}salaries/${id}`)
  }
}

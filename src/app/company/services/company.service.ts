import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get(this.SERVER_URL + 'company')
  }

}

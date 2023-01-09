
export interface EmployeeList {
  Eid: number;
  Ename: string;
  companyId: number;
  departmentId: number;
  salaryId: number;
  regDate: Date;
}

export interface CompanyList {
  id: number;
  name: string;
  regDate: Date;
}

export interface DepartmentList {
  id: number;
  name: string;
  companyId: number;
  regDate: Date;
}

export interface SalaryList {
  id: number;
  name: string;
  regDate: Date;
}

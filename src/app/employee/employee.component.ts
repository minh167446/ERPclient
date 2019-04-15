import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../data.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  constructor(private http:HttpClient, private data: DataService) { }

  async ngOnInit() {
    try {
      const data = await this.http.get(
        'http://localhost:3000/api/employees'
      ).subscribe(
        res=>this.employees = res
    );
      // data['success'] ? (this.departments = data['departments']) : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  departments:any;
  constructor(private http:HttpClient, private data: DataService) { }
  submitted = false;
  async ngOnInit() {
    try {
      const data = await this.http.get(
        'http://localhost:3000/api/departments'
      ).subscribe(
        // res=>{console.dir(this.departments);}
        res=>this.departments = res
    );
      // data['success'] ? (this.departments = data['departments']) : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

    employeeForm = new FormGroup({
      fullname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      // jobType: new FormControl('', [
      //   Validators.required,
      // ])
      departments: new FormControl()
    });
    async onSubmit() {
      console.log("SUBMIT FORM");
      console.dir(this.employeeForm.value);
      this.submitted = true;
      let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      const data = await this.http.post(
        'http://localhost:3000/api/employees', this.employeeForm.value, options
      ).subscribe(data => {
        console.log(data);
      });
      // window.location.href = "/employees";
    }
}

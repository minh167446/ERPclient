import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {

  departments: any;
  // department = {
  //   title:'',
  //   description: '',
  //   location: '',
  //   parentDepartment: null
  // }
  submitted = false;
  constructor(private http: HttpClient, private data: DataService, private router: Router, private fbuilder: FormBuilder, ) { }

  async ngOnInit() {
    try {
      const data = await this.http.get(
        'http://localhost:3000/api/departments'
      ).subscribe(
        res => this.departments = res
      );
      // data['success'] ? (this.departments = data['departments']) : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }

  }

  myForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    location: new FormControl('', [
      Validators.required,
    ]),
    parent_id:new FormControl('')
  });

  async onSubmit() {
    console.log("SUBMIT FORM");
    console.dir(this.myForm.value);
    this.submitted = true;
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const data = await this.http.post(
      'http://localhost:3000/api/departments', this.myForm.value, options
    ).subscribe(data => {
      console.log(data);
    });
    // window.location.href = "/department";
    // data['success'] ? this.router.navigate(['department'])
    //         .then(() => this.data.success(data['message']))
    //         .catch(error => this.data.error(error))
    //        : this.data.error(data['message']);
  }

  selected(event) {
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
  }


}

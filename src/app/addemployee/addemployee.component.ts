import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../data.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  departments:any;
  constructor(private http:HttpClient, private data: DataService) { }

  async ngOnInit() {
    try {
      const data = await this.http.get(
        'http://localhost:3000/api/departments'
      ).subscribe( 
        res=>this.departments=res
    );
      // data['success'] ? (this.departments = data['departments']) : this.data.error(data['message']); 
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}

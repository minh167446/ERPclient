import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message = "";
  messageType = "danger";
  user: any;
  cartItems = 0;

  constructor(private router: Router, private rest: RestApiService) {
      this.router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          this.message = "";
        }
      });
   }
  
  error(message) {
    this.messageType = 'danger';
    this.message = message;  
  }
  
  success(message) {
    this.messageType = 'success';
    this.message = message;  
  }
  
  warning(message) {
    this.messageType = 'warning';
    this.message = message;  
  }
}

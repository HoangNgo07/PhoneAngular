import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  check:boolean = false;
  title: any;
  constructor(private AuthService:AuthService){}
  ngOnInit() {
    this.check = this.AuthService.isLoggedIn();
  }
}

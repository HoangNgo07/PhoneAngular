import { Component } from '@angular/core';
import { DataService } from './../../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Username: string = "";
  Password: string = "";
  Email: string = "";
  Phone: string = "";
  constructor(private DataService: DataService, private router:Router) {

  }
  onSubmit() {
    if(this.Username.length!=0&&this.Password.length!=0&& this.Email.length!=0&& this.Phone.length!=0) {

      this.DataService.post('/register', {phonenumber:this.Phone, email:this.Email, fullname:this.Username, password:this.Password}).then((req:any)=>{
        alert('Registration successful');
        this.router.navigate(['/login']);

      }).
      catch((err)=>{
       alert('Email or phone number exists ')
      })
    }
    else{
      alert('Please fill all fields')
    }
  }
}

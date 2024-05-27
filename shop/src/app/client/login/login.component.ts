import { Router } from '@angular/router';
import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  phone: string="";
  password: string="";
constructor(private DataService:DataService,private Router:Router){}
onSubmit(){
  if(this.phone.length > 0&&this.password.length > 0){
    this.DataService.login(this.phone, this.password).then((e)=>{
      alert("Login successful");
      this.Router.navigate(['/account'])
    }).catch(()=>{
      alert("Login failed");
    })
  }
}

}

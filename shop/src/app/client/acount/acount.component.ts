import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent {
  profile: any;
  orders:any;
  constructor(private DataService: DataService) { }
  ngOnInit() {
    this.load_profile()
    this.load_order()
  }
  load_profile() {
    this.DataService.post('/account/profile', { phonenumber: localStorage.getItem('phone') }).then((req: any) => {
      this.profile = req.result;
    })
  }
  change_email(){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailRegex.test(this.profile.email)){
      this.DataService.patch('/account/verify-email', { newEmail: this.profile.email, phonenumber: localStorage.getItem('phone') }).then((req: any) => {
        this.profile = req.user;
      }).catch((err) => {console.log(err);})
    }
  }
  load_order(){
    this.DataService.get("/account/orders").then((req: any) => {
      this.orders = req.data;
      
     

    })
  }
}

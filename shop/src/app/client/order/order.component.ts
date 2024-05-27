import { Route, Router } from '@angular/router';
import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  buyerName: string = "";
  email: string = "";
  address: string = "";

  phone: string = "";
  paymentType: string = "";
  constructor(private DataService: DataService ,private route: Router ) { }
  onSubmit() {
    if (this.buyerName.length != 0 && this.email.length != 0 && this.address.length != 0 && this.phone.length != 0 && this.paymentType.length != 0) {
      this.DataService.post('/checkout', { email: this.email, phonenumber: this.phone, payment: this.paymentType, address: this.address ,fullname:this.buyerName}).then(()=>{
        alert('Payment received successfully')
        this.route.navigate(['/account']);
      }).catch(()=>{
        alert('Payment failed')
      })
    }
    else {
      alert('Please fill all fields')
    }
  }
}

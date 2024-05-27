import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { DataService } from './../../service/data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  listCart: any[] = []
  totail: number = 0
  check:boolean = false;
  constructor(private DataService: DataService, private AuthService:AuthService) { }
  ngOnInit() {
    this.load_Cart()
    this.check = this.AuthService.isLoggedIn()
  }
  load_Cart() {
    this.DataService.get("/cart").then((req: any) => {
      this.listCart = req;
      
     

    })
  }
   change_cart(id:any,quantity:number) {
  
    this.listCart.forEach((item: any) => {
      if(item.id == id){
        item.quantity=quantity
        if(quantity ==0||item.quantity*item.price==0){
          this.listCart.splice(this.listCart.indexOf(item),1)
         
        }
        this.DataService.patch(`/cart/${id}`,{quantity:quantity})
        
       
        
      }
    })
    this.totail=this.listCart.reduce((a,b)=> a.price*a.quantity+ b.price*b.quantity)
     
    
  }
  
}

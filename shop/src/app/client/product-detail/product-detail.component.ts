import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: any;
  selectedMemory = [];
  img: string|any;
  selectedColor: string|any;
  selectedPrice: number|any;
  sideImages :any []= [];
  id: number|null=null;
  constructor(private router: ActivatedRoute, private DataService:DataService,private route: Router ) {

  }
  ngOnInit(): void {
		let MyId = this.router.snapshot.paramMap.get("id");
		this.load_product(MyId);
	}
  load_product(id:any){
    this.DataService.get(`/products/${id}`).then((res:any)=>{
      this.product= res.data;
      this.img = this.product.image[0].path[0].img;
      this.sideImages = this.product.image[0].path;
      
      this.selectedColor = this.product.image[0].phoneColor;
      this.selectedMemory = this.product.memory[0].size;
      this.selectedPrice = this.product.memory[0].price;
    })
  }
  sideImage(images:any) {
    this.img = images;
  }
  addToCart(){
    let body={
      productId:this.product.id,
      name:this.product.name,
      color:this.selectedColor,
      memory:this.selectedMemory,
      price:this.selectedPrice,
      image:this.sideImages[0].img,
      quantity:1
    }
    this.DataService.post('/cart',body)
   
   
  }
  selectedPhoneColor(data:any) {
    this.img = data.path[0].img;
    this.selectedColor = data.phoneColor;
    this.sideImages = data.path;
  }
  selectPhoneMemory(data:any) {
    this.selectedMemory = data.size;
    // we change price when memory size is changed
    this.selectedPrice = data.price;
  }
  

}

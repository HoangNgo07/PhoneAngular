import { DataService } from '../../service/data.service'

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  listProducts: any[] = []
  searchField: string = '';
  config: any;
  page_size: number = 1;
  constructor(private DataService: DataService, private router: Router) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1
    };
  }
  ngOnInit() {
    this.loadproducts();
  }
  loadproducts() {
    this.DataService.get("/products").then((res: any) => {
      this.listProducts = res.data;
      this.page_size = Math.ceil(this.listProducts.length / this.config.itemsPerPage)
    })
  }
  goToProduct(product: any) {
    this.router.navigate(['/products/' + product.id]);
  }
  nextPage() {
    if (this.config. currentPage + 1 <= this.page_size) { 
      this.config.currentPage++;
   
    }
   
  }
  previousPage() {
    if(this.config.currentPage-1>0){
      this.config.currentPage--;
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componet/app.component';
import { ProductsComponent } from './client/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './_directives/highlight.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { CartComponent } from './client/cart/cart.component';
import { RegisterComponent } from './client/register/register.component';
import { LoginComponent } from './client/login/login.component';
import { AcountComponent } from './client/acount/acount.component';
import { OrderComponent } from './client/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HighlightDirective,
    ProductDetailComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    AcountComponent,
    OrderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

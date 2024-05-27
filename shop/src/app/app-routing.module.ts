import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './client/products/products.component';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { CartComponent } from './client/cart/cart.component';
import { RegisterComponent } from './client/register/register.component';
import { LoginComponent } from './client/login/login.component';

import { AcountComponent } from './client/acount/acount.component';
import { AuthGuard } from './service/auth.guard';
import { OrderComponent } from './client/order/order.component';

const routes: Routes = [
  { path: "home", component: ProductsComponent },
  {
    path: "products/:id",
    component: ProductDetailComponent
  },
  {
    path:"cart",
    component:CartComponent
  },{
    path:"register",
    component:RegisterComponent,canActivate: [AuthGuard]
  },{
    path:"login",
    component:LoginComponent,canActivate: [AuthGuard]
  },
  {
    path:"account",
    component:AcountComponent
  },{
    path:"order",
    component:OrderComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

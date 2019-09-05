import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './components/orders/orders.component';

/*
 * The following routes are available under /shopping-cart.
 * The default main page for ShoppingCart module is the Orders component.
 */

const routes: Routes = [
  { path: '', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }

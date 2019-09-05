import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    SharedModule,
    ShoppingCartRoutingModule
  ],
  providers: [
    OrderService
  ]
})
export class ShoppingCartModule { }

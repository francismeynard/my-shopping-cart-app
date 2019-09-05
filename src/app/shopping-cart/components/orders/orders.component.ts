import { Component, OnInit } from '@angular/core';

import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.initOrderList();
  }

  onDelete(order: Order) {
    this.orderService.delete(order);
    this.initOrderList();
  }

  onSelect(order: Order) {
    this.selectedOrder = order;
  }

  processUpdateOrdersEvent(updated: boolean) {
    if (updated) {
      this.initOrderList();
    }
  }

  get totalPrice(): number {
    return this.orders.length > 0 ? this.orders.map(o => o.price).reduce((total, price) => total + price) : 0;
  }

  private initOrderList() {
    this.orders = this.orderService.list();
  }

}

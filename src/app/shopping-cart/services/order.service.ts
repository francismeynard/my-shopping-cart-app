import { Injectable } from '@angular/core';

import { Order } from '../models/order.model';

/*
 * @Class OrderService
 * This service handles the CRUD operation of the order in the shopping cart.
 * For this demo purpose, it uses the localStorage to store the current orders.
 * Using the localStorage, the orders will be saved and retrived when the shopping cart opens.
 */

@Injectable()
export class OrderService {

  constructor() { }

  add(order: Order) {
    let orders = this.list();
    order.id = orders.length + 1;
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
  }

  delete(order: Order) {
    let orders = this.list();
    let updatedOrders = orders.filter(o => o.id != order.id);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  }

  list() {
    return JSON.parse(localStorage.getItem("orders")) || [];
  }

  update(order: Order) {
    let orders = this.list();
    let existingOrder = orders.find(o => o.id == order.id);

    if (existingOrder) {
      existingOrder.name = order.name;
      existingOrder.quantity = order.quantity;
      existingOrder.price = order.price;
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }

}

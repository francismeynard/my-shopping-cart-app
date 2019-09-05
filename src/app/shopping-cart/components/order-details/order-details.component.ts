import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Order } from '../../models/order.model';
import { InventoryItem } from 'src/app/core/models/inventory-item.model';

import { InventoryService } from 'src/app/core/services/inventory.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  @Input() selectedOrder: Order;
  @Output() updateOrdersEvent = new EventEmitter<boolean>();

  calculatedPrice: number;
  selectedItem: InventoryItem;
  selectedQuantity: number;

  inventoryItems: InventoryItem[];

  constructor(private inventoryService: InventoryService, private orderService: OrderService) { }

  calculatePrice() {
    if (this.selectedItem.price && this.selectedQuantity > 0) {
      this.calculatedPrice = (this.selectedItem.price * this.selectedQuantity);
    } else {
      this.calculatedPrice = null;
    }
  }

  ngOnInit() {
    this.inventoryService.getInventoryList().subscribe(items => {
      this.inventoryItems = items
      this.initSelections();
    });
  }

  onCancel() {
    this.resetSelections();
  }

  onSave() {
    let order: Order = {
      id: this.selectedOrder ? this.selectedOrder.id : null,
      name: this.selectedItem.name,
      quantity: this.selectedQuantity,
      price: this.calculatedPrice
    };

    if (this.selectedOrder) {
      this.orderService.update(order);
    } else {
      this.orderService.add(order);
    }

    this.resetSelections();
  }

  setSelectedOrder(order: Order) {
    this.selectedOrder = order;
    this.initSelections();
  }

  private initSelections() {
    let selectedOrderItem = this.selectedOrder ? this.inventoryItems.find(i => i.name == this.selectedOrder.name) : null;

    this.selectedItem = selectedOrderItem || this.inventoryItems[0];
    this.selectedQuantity = this.selectedOrder ? this.selectedOrder.quantity : 1;
    this.calculatePrice();
  }

  private resetSelections() {
    this.selectedOrder = null;
    this.initSelections();
    this.updateOrdersEvent.emit(true);
  }

}

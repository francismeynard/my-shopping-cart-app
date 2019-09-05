import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { InventoryItem } from '../models/inventory-item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  /*
   * This method will return list of inventory items.
   * @return Observable<> for inventory items.
   */
  getInventoryList(): Observable<InventoryItem[]> {

    // For this demo purpose, we will be returning mock items.
    // This service method ca be replaced with the actual backend API call.

    const mockItems = [
      { id: 1, name: 'Bread', price: 4.5 },
      { id: 2, name: 'Cereal', price: 5.0 },
      { id: 3, name: 'Milk', price: 3.5 },
      { id: 4, name: 'Coffee', price: 3.0 },
      { id: 5, name: 'Sugar', price: 2.3 },
      { id: 6, name: 'Egg', price: 0.90 },
      { id: 7, name: 'Cheese', price: 4.25 },
      { id: 8, name: 'Appple', price: 1.5 },
      { id: 9, name: 'Banana', price: 1.75 },
      { id: 10, name: 'Orange', price: 1.25 }
    ];

    return of(mockItems);
  }

}

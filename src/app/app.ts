import { Component } from '@angular/core';
import { AddressList } from './address-list/address-list';
import { Header } from './header/header';
import { ShoppingInput } from './shopping-input/shopping-input';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    Header,
    AddressList,
    ShoppingInput,
    ShoppingList
  ]
})
export class App {
  title = 'address-book';

  showShoppingList = false;

  shoppingItems: string[] = [];

  addShoppingItem(item: string): void {
    this.shoppingItems.push(item);
  }

  removeShoppingItem(index: number): void {
    this.shoppingItems.splice(index, 1);
  }
}
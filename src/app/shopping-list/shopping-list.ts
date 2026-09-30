import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  @Input() items: string[] = [];

  @Output() removeItem = new EventEmitter<number>();

  supprimer(index: number): void {
    this.removeItem.emit(index);
  }
}
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-input',
  imports: [FormsModule],
  templateUrl: './shopping-input.html',
  styleUrl: './shopping-input.css'
})
export class ShoppingInput {
  item = '';

  @Output() addItem = new EventEmitter<string>();

  ajouter(): void {
    const value = this.item.trim();

    if (value !== '') {
      this.addItem.emit(value);
      this.item = '';
    }
  }
}
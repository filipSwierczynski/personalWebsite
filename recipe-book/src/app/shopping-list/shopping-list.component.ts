import { Component } from '@angular/core';
import { Ingrdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
ingredients: Ingrdient[] = [
  new Ingrdient('Cheese',200),
  new Ingrdient('Tomatoes',10),
];
}

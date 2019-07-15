import {Component, Input} from '@angular/core';

import {IIngredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent {
  @Input() ingredient: IIngredient;
}

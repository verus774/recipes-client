import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {IngredientsService} from '../../services/ingredients.service';
import {IIngredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients$: Observable<IIngredient[]>;

  constructor(private ingredientsService: IngredientsService) {
  }

  ngOnInit() {
    this.ingredients$ = this.ingredientsService.getAll();
  }
}

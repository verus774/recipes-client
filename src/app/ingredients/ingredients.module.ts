import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IngredientItemComponent, IngredientListComponent} from './components';
import {IngredientsRoutingModule} from './ingredients-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IngredientsRoutingModule,
  ],
  declarations: [
    IngredientItemComponent,
    IngredientListComponent,
  ]
})
export class IngredientsModule {
}

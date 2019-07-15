import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IngredientListComponent} from './components';
import {IngredientsRoutingModule} from './ingredients-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IngredientsRoutingModule,
  ],
  declarations: [
    IngredientListComponent,
  ]
})
export class IngredientsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material';

import {IngredientItemComponent, IngredientListComponent} from './components';
import {IngredientsRoutingModule} from './ingredients-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    IngredientsRoutingModule,
  ],
  declarations: [
    IngredientItemComponent,
    IngredientListComponent,
  ]
})
export class IngredientsModule {
}

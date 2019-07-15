import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IngredientListComponent} from './components';


const routes: Routes = [
  {
    path: 'ingredient-list',
    component: IngredientListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule {
}

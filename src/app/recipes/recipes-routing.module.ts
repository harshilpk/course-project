import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { AuthGuard } from '../auth/auth-guard.service';


const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [ //removing recipes
    {path: '', component: RecipeStartComponent},
    {path:'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetailComponent },
    {path:':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ] }
];

@NgModule({
  imports:[
    RouterModule.forChild(recipesRoutes) //child instead of root
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule{

}

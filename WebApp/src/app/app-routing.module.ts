import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"recipe/:id",component:RecipeComponent},
  {path:"add",component:AddRecipeComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

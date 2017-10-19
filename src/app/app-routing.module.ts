import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { leftNavComponent} from './header/leftNav/leftNav.component';
import {CarouselComponent} from './carousel/carousel.component'; 
import { CarouselStartComponent } from './carousel/carousel-start/carousel-start.component'; 
import { CarouselDetailComponent } from './carousel/carousel-detail/carousel-detail.component'; 
import { ProjectComponent } from './project/project.component'; 
import { SignsComponent } from './project/signs/signs.component'; 
import { WhatifComponent } from './project/whatif/whatif.component'; 



import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipe/recipe.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component'; 
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component'; 
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component'; 

const appRoutes: Routes = [

 {path: '', redirectTo:'/home', pathMatch: 'full'},
      { path: 'home', component: CarouselComponent, children:  [
       {path: '', component: CarouselStartComponent},
  		 {path: ':id', component: CarouselDetailComponent}, 
    ]}, 
  {path: '', redirectTo:'/projects', pathMatch: 'full'},
      { path: 'project', component: ProjectComponent, children:  [
     //  {path: 'signs', component: SignsComponent},
      // {path: 'whatif', component: WhatifComponent}, 
    ]}, 
    {path: '', redirectTo:'/signs', pathMatch: 'full'},
      { path: 'signs', component: SignsComponent, children:  [
       {path: '', component: CarouselStartComponent},
       {path: ':id', component: CarouselDetailComponent},
     ]},   
    {path: '', redirectTo:'/whatif', pathMatch: 'full'},
      { path: 'whatif', component: WhatifComponent, children:  [
       {path: '', component: CarouselStartComponent},
       {path: ':id', component: CarouselDetailComponent},
     ]},
    
    {path: '', redirectTo: '/recipes',  pathMatch: 'full'}, 
  { path: 'recipes', component: RecipebookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},  
  ] },
  { path: 'shoppinglist', component: ShoppinglistComponent, pathMatch: 'full' },
  
   
 
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { leftNavComponent} from './project/leftNav/leftNav.component';
import {HomeComponent} from './home/home.component'; 
import {CarouselComponent} from './carousel/carousel.component'; 
import { CarouselStartComponent } from './carousel/carousel-start/carousel-start.component'; 
import { CarouselDetailComponent } from './carousel/carousel-detail/carousel-detail.component'; 
import { ProjectComponent } from './project/project.component'; 
import { SignsComponent } from './project/signs/signs.component'; 
import { WhatifComponent } from './project/whatif/whatif.component'; 

// Report Demo
import {ReportComponent} from './report/report.component'; 
import {RegisterComponent} from './report/register/register.component'; 
import {UserReportComponent } from './report/user-report/user-report.component'; 
import {DatabaseComponent } from './database/database.component'; 

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipe/recipe.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component'; 
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component'; 
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component'; 

import {APIRestComponent} from './api_rest/api-rest.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {PageNotFoundComponent} from './not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent}, 

  {path: 'recipes', redirectTo: '/recipes',  pathMatch: 'full'}, 
  { path: 'recipes', component: RecipebookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},  
  ] },
  { path: 'shoppinglist', component: ShoppinglistComponent, pathMatch: 'full' },
  
  {path: '', redirectTo:'project', pathMatch: 'full'},
      { path: '', component: ProjectComponent, children:  [
       {path: ':id', component: CarouselDetailComponent}, 
       { path: 'project/whatif', component: WhatifComponent, children:  [
        {path: ':id', component: CarouselDetailComponent}, 
        ]},
        { path: 'project/signs', component: SignsComponent, children:  [
        {path: ':id', component: CarouselDetailComponent}, 
     ]}, 
      // {path: 'project/signs', component: SignsComponent},
     //  {path: 'project/whatif', component: WhatifComponent}, 
    ]}, 

     // {path: '', redirectTo:'project/whatif', pathMatch: 'full'},
     //   { path: '', component: WhatifComponent, children:  [
     //    {path: ':id', component: CarouselDetailComponent}, 
     // ]}, 
     // {path: '', redirectTo:'/project/signs', pathMatch: 'full'},
     //   { path: 'project/signs', component: SignsComponent, children:  [
     //    {path: ':id', component: CarouselDetailComponent}, 
     // ]}, 
     // Report Demo
   {path: 'reportHome', redirectTo:'/reportHome', pathMatch: 'full'},
      { path: 'reportHome', component: ReportComponent, children:  [
       {path: 'register', component: RegisterComponent},
       {path: 'report', component: UserReportComponent},  
       ]},
     //API Demo 
  {path: 'apirest', redirectTo:'/apirest', pathMatch: 'full'},
      { path: 'apirest', component: APIRestComponent}, 

  {path: 'database', redirectTo:'/database', pathMatch: 'full'},
      { path: 'database', component: DatabaseComponent}, 

  {path: 'jScript', redirectTo:'/jScript', pathMatch: 'full'},
      { path: 'jScript', component: JavascriptComponent}, 
    
   { path: '**', component: PageNotFoundComponent } 
 
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselDetailComponent } from './carousel/carousel-detail/carousel-detail.component';
import { CarouselListComponent } from './carousel/carousel-list/carousel-list.component';
import { CarouselItemComponent } from './carousel/carousel-list/carousel-item/carousel-item.component';
import { CarouselStartComponent } from './carousel/carousel-start/carousel-start.component';
import { CarouselService } from './carousel/carousel.service';
import { leftNavComponent } from './project/leftNav/leftNav.component';
import { RecipebookComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe.service';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shoppinglist/shoppinglist.service';
import { ProjectComponent } from './project/project.component';
import { WhatifComponent } from './project/whatif/whatif.component';
import { SignsComponent } from './project/signs/signs.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { MaxComponent } from './tshirt/max/max.component';
import { AnimalsComponent } from './tshirt/animals/animals.component';
// Report Demo
import { RegisterComponent } from './report/register/register.component';
import { ReportComponent } from './report/report.component';
import { UserReportComponent } from './report/user-report/user-report.component';
import { UserReportListComponent } from './report/user-report/user-report-list/user-report-list.component';
import { UserReportItemComponent } from './report/user-report/user-report-list/user-report-item/user-report-item.component';
import {UserReportService} from './report/service/user-report.service';
//API Rest Demo
import { ApiService } from './api.service';
import { APIRestComponent } from './api_rest/api-rest.component';
import { TodoListFooterComponent } from './api_rest/todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './api_rest/todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './api_rest/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './api_rest/todo-list/todo-list.component';
import { TodoDataService } from './api_rest/todo-data.service';
import { DatabaseComponent } from './database/database.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    HeaderComponent,
    leftNavComponent,
    CarouselComponent,
    CarouselStartComponent,
    CarouselListComponent,
    CarouselItemComponent,
    CarouselDetailComponent,
    DropdownDirective,
    RecipebookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent, 
    RecipeEditComponent, 
    ShoppingEditComponent,
    ShoppinglistComponent,
    ProjectComponent,
    WhatifComponent,
    SignsComponent,
    TshirtComponent,
    MaxComponent,
    AnimalsComponent,
    // Report Demo
    RegisterComponent,
    ReportComponent,
    UserReportComponent,
    UserReportListComponent,
    UserReportItemComponent,
    // API Rest Demo
    APIRestComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    TodoListComponent,
    DatabaseComponent,
   
    JavascriptComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [
  RecipeService,
  ShoppingListService,
  CarouselService, 
  UserReportService, 
  TodoDataService, 
  ApiService,
 
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

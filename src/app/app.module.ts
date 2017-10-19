import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
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
import { leftNavComponent } from './header/leftNav/leftNav.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
  RecipeService,
  ShoppingListService,
  CarouselService, 
 
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

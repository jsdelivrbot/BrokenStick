import {Subscription} from 'rxjs/Subscription'; 
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']

})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription; 
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
    this.ingredients = ingredients; 
}
      );
  }
  onEditItem(index: number){
    this.slService.startedEditing.next(index); 
  }
  ngOnDestroy() {
  this.subscription.unsubscribe(); 
}
  
}


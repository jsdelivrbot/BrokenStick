import {Injectable} from '@angular/core'; 
import { Recipe } from './recipe.model';
import {Subject } from 'rxjs/Subject'; 
import { ShoppingListService } from '../shoppinglist/shoppinglist.service'; 
import {Ingredient } from '../shared/ingredient.model';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
	private recipes: Recipe[] = [

    new Recipe('Strawberry Dacri', 'This is a cool drink', 'https://c1.staticflickr.com/4/3797/13124169814_ddb0eb9a58_b.jpg',
    [
    	new Ingredient('Meat', 1),
    	new Ingredient('French Fries', 20) 

    ]),
    new Recipe('Tomato vegetable pasta', 'Soupy', 'https://s-media-cache-ak0.pinimg.com/originals/1e/94/b8/1e94b87644df699f0d24c1b20e71e7f7.jpg',
    [
    	new Ingredient('Buns', 2),
    	new Ingredient('Meat', 2)
    ])
    ];

    	constructor(private SlService: ShoppingListService){}
    	getRecipes() {
    	return this.recipes.slice(); 
    	}
    	getRecipe(index: number){
    		return this.recipes[index]; 
    	}
    	addIngredentsToShoppingList(ingredients: Ingredient[]) {
    	 this.SlService.addIngredients(ingredients);
    	}
        addRecipe(recipe: Recipe) {
            this.recipes.push(recipe); 
            this.recipesChanged.next(this.recipes.slice())
        }
        updateRecipe(index: number, newRecipe: Recipe) {
            this.recipes[index] = newRecipe; 
            this.recipesChanged.next(this.recipes.slice());
        }
        deleteRecipe(index: number){
            this.recipes.splice(index, 1); 
            this.recipesChanged.next(this.recipes.slice());
        }
}


import { Ingredient} from '../shared/ingredient.model'; 
import { Subject} from 'rxjs/Subject'; 
export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>(); 
	private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  new Ingredient('Bread', 11),
    new Ingredient('Milk', 12),
    new Ingredient('Eggs', 13),
    new Ingredient('Pop', 14),
    new Ingredient('Onions', 15),
    new Ingredient('Tomatos', 16)
  ];

  getIngredients(){
  	return this.ingredients.slice(); 
  }
  getIngredient(index: number){
    return this.ingredients[index]; 
  }
  addIngredient(ingredient: Ingredient) {
  	this.ingredients.push(ingredient); 
  	this.ingredientsChanged.next(this.ingredients.slice()); 
  }
  addIngredients(ingredients: Ingredient[]){ 
<<<<<<< HEAD
  
=======
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient; 
    this.ingredientsChanged.next(this.ingredients.slice()); 
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1); 
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeListSelected= new EventEmitter<Recipes>();
 @Output() recipe: Recipes[] =[
    new Recipes('Test name', 'this is a test name', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cheesy_Corn_Chaat_a_5_minute_recipe_-_Gujarat_-_SHAILI_012.jpg/800px-Cheesy_Corn_Chaat_a_5_minute_recipe_-_Gujarat_-_SHAILI_012.jpg?20210413234134')]
    ;
  constructor() { }
  ngOnInit(): void {
    
  }
  onrecipeSelected(recipe:Recipes){
this.recipeListSelected.emit(recipe);
  }

}

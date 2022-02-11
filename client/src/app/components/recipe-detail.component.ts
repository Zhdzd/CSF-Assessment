import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe[] = [];
  recipeId: string;

  constructor(private recipeSvc: RecipeService, private router: Router) { }

  ngOnInit(): void {
      this.recipeSvc.getRecipe(recipeId).subscribe((recipe)=>(this.recipe = recipe))l
  }


  //this.recipeService.getAllRecipes().subscribe((recipeSummary)=>
  //(this.recipeSummary = recipeSummary));
}

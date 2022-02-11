import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipeSummary } from '../models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipes = RECIPE;
  recipeSummary: RecipeSummary[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((recipeSummary)=> (this.recipeSummary = recipeSummary));
  }


}

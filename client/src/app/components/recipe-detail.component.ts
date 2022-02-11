import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipeSummary } from '../models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  recipeId!: string;

  constructor(private recipeSvc: RecipeService, private router: Router,
    private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
  this.recipeId = this.activatedRoute.snapshot.params['recipeId'];
    console.info('>>>recipe id is:', this.recipeId)

    // this.recipeSvc.getRecipe(this.recipeId).subscribe((recipe)=>(this.recipe = recipe));
    this.recipeSvc.getRecipe(this.recipeId)
        .then((r) =>{
          this.recipe = r as Recipe;
          console.log(this.recipe)
          console.info('>>>Promise:', r);
        })
  }



}

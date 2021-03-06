import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable, of } from "rxjs";

import { Recipe, RecipeSummary } from "../models";

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient){}

    // getAllRecipes(): Observable<RecipeSummary[]>{
    //     const recipes = of(RECIPE);
    //     return recipes

    getAllRecipes(): Observable<RecipeSummary[]>{

        return this.http.get<RecipeSummary[]>("http://localhost:8080/api/recipes")
    }

    getRecipe(recipeId: string): Promise<Recipe>{
      return lastValueFrom(
        this.http.get<Recipe>(`http://localhost:8080/api/recipe/${recipeId}`)
      )
    }
    saveRecipe(recipe: Recipe): Promise<any>{
        console.info('>>>recipe', recipe);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            Accept: 'application/json',
          })
        };

        return lastValueFrom(
          this.http.post(
            'http://localhosst:8080/api/recipe',
            recipe,
            httpOptions
          )
        )
    }

}

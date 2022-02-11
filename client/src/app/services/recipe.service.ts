import { HttpClient } from "@angular/common/http";
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

    getRecipe(recipeId: string): Observable<Recipe[]>{
          return this.http.get<Recipe[]>(`http://localhost:8080/api/recipes/${recipeId}`)
    }

}

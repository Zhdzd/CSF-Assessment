import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { RECIPE } from "../mock.recipe";
import { RecipeSummary } from "../models";

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient){}

    getAllRecipes(): Observable<RecipeSummary[]>{
        const recipes = of(RECIPE);
        return recipes
    }
}

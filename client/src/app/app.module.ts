import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail.component';
import { RecipeAddComponent } from './components/recipe-add.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeService } from './recipe.service';

const appRoutes : Routes = [
  { path: '', component:RecipeListComponent },
  { path: 'recipe/:recipeId', component: RecipeDetailComponent},
  { path: 'add', component: RecipeAddComponent},
  { path: '**', redirectTo: '/', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

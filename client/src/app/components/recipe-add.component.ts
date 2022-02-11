import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private recipeSvc: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
      this.form = this.createForm();
  }

  createForm(): FormGroup{
    return this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      image: this.fb.control('', [Validators.required] ),
      instruction: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      ingredients: this.fb.array([
          new FormControl('',[Validators.required, Validators.minLength(3)]),
        ])
    });
  }

  addIngredient(){
      const control = new FormControl('', Validators.required);
      (<FormArray>this.form.get('ingredients')).push(control);
  }

  returnFormArr(form: FormGroup, key: string): FormArray {
    return form.get(key) as FormArray;
  }

  removeIngControl(i: number){
    (<FormArray>this.form.get('ingredients')).removeAt(i);
  }
  createId(length: number): string {
    let randomId= "";
    let characters = 'abcdefghijk12345678';

    for(let i = 0; i< length; i++){
      randomId = randomId + characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }
    return randomId;

  }
  submit(){
    let recipe: Recipe ={
      id:  ''+this.createId(4),
      title: this.form.value.title,
      ingredients: this.form.value.ingredients,
      instruction: this.form.value.instruction,
      image: this.form.value.image
    }
    console.log(recipe)
    this.recipeSvc.saveRecipe(recipe).then(() => {
      this.router.navigate(['/']);

    });

  }
////


}

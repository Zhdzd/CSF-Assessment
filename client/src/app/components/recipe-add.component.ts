import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../models';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  form!: FormGroup
  //ingredients!: FormArray

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.form = this.createForm();
  }

  createForm(): FormGroup{
    return this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      image: this.fb.control('', [Validators.required]),
      instruction: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      ingredients: this.fb.array([new FormControl('')])
    });
  }
  addIngredient(){
      const control = new FormControl('', Validators.required);
      (<FormArray>this.form.get('ingredients')).push(control);
  }

  returnFormArr(form: FormGroup, key: string): FormArray {
    return form.get(key) as FormArray;
  }



}

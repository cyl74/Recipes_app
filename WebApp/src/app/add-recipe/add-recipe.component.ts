import { Component } from '@angular/core';
import { GeneralService } from '../general.service';
import { Router } from '@angular/router';
import { RecipesClass } from '../recipes';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators  } from '@angular/forms';



@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: GeneralService, private router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),
      instruction: ['', Validators.required],
      img: ['']
    });
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      const newRecipe = {title:this.form.value.title, ingredient: this.form.value.ingredients,
         instruction: this.form.value.instruction, image: this.form.value.img };
      this.service.addRecipe(newRecipe).subscribe(
        response => {
          console.log('Recipe added successfully', response);
          this.router.navigate(['']);
        },
        error => {
          console.error('Error adding recipe', error);
        }
      );
    }
  }
}


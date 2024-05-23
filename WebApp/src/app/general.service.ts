import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RecipesClass } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
//general service such as finding recipes
  recipes:RecipesClass[];
  constructor(private  http: HttpClient) {
    //create any parament here if needed
    this.recipes=[]
   }
   ngOnInit(): void {
    this.http.get('http://localhost:8080/recipes')
      .subscribe((data)=>{
        console.log(data);
      })
  }
   //the rest of the functions goes here
   get() {
    return this.recipes
   }

   add(newRecipe:RecipesClass){
    this.http.post('http://localhost:8080/recipes',{
      "title":newRecipe.title,
      "ingredient":newRecipe.ingredient,
      "instruction": newRecipe.instruction, 
      "image":newRecipe.image
    }).subscribe(
      (data:any)=>{
        console.log(data);
        
    })
   }

   delete(del_id:number){
   }
}

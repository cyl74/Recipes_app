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

   //the rest of the functions goes here
   getAll():Observable<RecipesClass[]> {
    return this.http.get<RecipesClass[]>('http://localhost:8080/recipes');
   }

   searchById(id:number):Observable<RecipesClass> {
    return this.http.get<RecipesClass>('http://localhost:8080/recipes/'+id);
   }
   
   
   addRecipe(newRecipe:RecipesClass):Observable<RecipesClass>{
    return this.http.post<RecipesClass>('http://localhost:8080/recipes',{//<RecipesClass> indicate return type
      "title":newRecipe.title,
      "ingredient":newRecipe.ingredient,
      "instruction": newRecipe.instruction, 
      "image":newRecipe.image
    })
   }

   deleteRecipe(id:number){
    return this.http.delete<RecipesClass>('http://localhost:8080/recipes/'+id);
   }
}

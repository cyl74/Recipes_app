import { Component } from '@angular/core';
import { RecipesClass } from '../recipes';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  id:number;
  recipe:RecipesClass;

  constructor(private activeedRoute: ActivatedRoute, private service:GeneralService,private router: Router){
    this.id = -1;
    this.recipe=new RecipesClass("",[],"","");
  }

  ngOnInit():void{
    this.id=this.activeedRoute.snapshot.params['id'];
    this.service.searchById(this.id).subscribe(
        (data: RecipesClass) => {
          this.recipe = data;
          console.log(data);
        }
    );
  }

  onDelete(){
    this.service.deleteRecipe(this.id).subscribe(
      (data:RecipesClass)=>{
        console.log(data);
      }
    );
    this.router.navigate([''])
  }

}

import { Component,OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Router } from '@angular/router';
import { RecipesClass } from '../recipes';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  recipes:RecipesClass[];
  searchTerm:string;
  constructor(private service: GeneralService, private router:Router ){
    this.recipes=[]
    this.searchTerm=""
  }

  ngOnInit():void{
    this.recipes=[
      { title:"cheese pizza",
        ingredient:["tomato"],
        instruction:"bake",
        image:"none",
        id:678},
        { title:"miso soup",
        ingredient:["tomato"],
        instruction:"boil",
        image:"none",
        id:-1},
        { title:"curry",
        ingredient:["tomato"],
        instruction:"cook",
        image:"none",
        id:93},
        { title:"cookie",
        ingredient:["choclate"],
        instruction:"bake",
        image:"none",
        id:678},
        { title:"candy",
        ingredient:["tomato"],
        instruction:"boil",
        image:"none",
        id:-1},
        { title:"fried chicken",
        ingredient:["tomato"],
        instruction:"cook",
        image:"none",
        id:93},
        { title:"pepperoni pizza",
        ingredient:["tomato"],
        instruction:"bake",
        image:"none",
        id:678},
        { title:"tomato soup",
        ingredient:["tomato"],
        instruction:"boil",
        image:"none",
        id:-1},
        { title:"chicken soup",
        ingredient:["tomato"],
        instruction:"cook",
        image:"none",
        id:93}
    ]
    this.searchTerm=""
  }
  //make a serivice to retrive all recipes here

  onReadMore(recipe:RecipesClass){
    this.router.navigate(['/recipe/',recipe.id])//this will bring you to localhost:.../info/:id
  }

  onAdd(){
    this.service.add({ title:"cheese pizza",
    ingredient:["tomato"],
    instruction:"bake",
    image:"none"
    })
  }

}

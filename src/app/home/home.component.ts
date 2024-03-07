import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../Service/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipeList:any=[]
  recipeName:string=""
  cuisine:string=""

 P:number =1;

  constructor(private rs:RecipeService){}

  ngOnInit(): void {
    this.rs.getRestaurants().subscribe((data:any)=>{
      this.recipeList=data.recipes
       console.log(this.recipeList);
       
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../Service/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipeName: string = "";
  recipeList: any[] = [];
  filteredRecipes: any[] = [];
  mealTypeFilter: string = '';
  p: number = 1;
  filterData: any = ""

  // filterOptions: string[] = ['Lunch', 'Dinner'];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (data: any) => {
        this.recipeList = data.recipes;
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  changeFilterData(data: any) {
    this.filterData = data
  }

  

}

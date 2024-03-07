import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../Service/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {

  id:any=""
  singleView:any={}

  constructor(private service:RecipeService,private rout:ActivatedRoute){}

   ngOnInit(): void {
    this.rout.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);

      this.service.getRestaurants().subscribe((response:any)=>{
          this.singleView=response.recipes.find((i:any)=>i.id==this.id)
          console.log(this.singleView);
          
      })
      
    })
   }

}

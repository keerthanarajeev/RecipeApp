import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  // api call

  // access all restaurant datas

  getRestaurants(){
    return this.http.get(`https://dummyjson.com/recipes`)
  }
}

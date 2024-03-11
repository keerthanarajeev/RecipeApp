import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(allRecipeArray: any[], filterMealType: string): any {

    const result: any = []
    if (!allRecipeArray || !filterMealType) {
      return allRecipeArray
    }
    else {


      return allRecipeArray.filter((item:any)=>item.mealType==filterMealType)
      
  }
  }

}

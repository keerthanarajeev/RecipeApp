import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipePipe'
})
export class RecipePipePipe implements PipeTransform {

  transform(DataArray:any[],searchString:string,searchName:string): any {
    
    const result:any=[]

    if(!DataArray || !searchString || !searchName) {
    return DataArray

    }

    else{
      DataArray.forEach((item:any)=>{
        if(item.name.trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }

        if(item.cuisine.trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }


}

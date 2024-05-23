import { Pipe, PipeTransform } from '@angular/core';
import { RecipesClass } from './recipes';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:RecipesClass[],querystring:string): RecipesClass[] {
    return recipes.filter((r) => r.title.toLowerCase().includes(querystring.toLowerCase()));
  }

}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
        return it.name_eng.toLowerCase().includes(searchText)
        ||it.name_th.toLowerCase().includes(searchText)
        
      });
    }
          
    

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroName'
})
export class FiltroNamePipe implements PipeTransform {

  transform(characters: any[], name: string): any[] {
    if(characters && characters.length && name != "" ){
    return characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
  }
  else return characters
  }
}

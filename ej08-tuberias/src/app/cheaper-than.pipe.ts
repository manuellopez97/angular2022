import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cheaperThan'
})
export class CheaperThanPipe implements PipeTransform {

  transform(coches:any[], precio:number): any[] {
   return coches.filter(c => c.precio < precio)
  }

}

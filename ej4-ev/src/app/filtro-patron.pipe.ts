import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron'
})
export class FiltroPatronPipe implements PipeTransform {

  transform(coches:any[], patron:string): any[] {
    if(coches && coches.length && patron != "" ){
      return coches.filter(coche => coche.nombre.toLowerCase().includes(patron.toLowerCase()))
    }
    else return coches
  }

}

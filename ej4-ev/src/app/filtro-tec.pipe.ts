import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTec'
})
export class FiltroTecPipe implements PipeTransform {

  transform(coches: any[], tec:string): any[] {
    if(coches && coches.length && tec != "0"){
      return coches.filter(coche => coche.tecnologia == tec)
    }
    else return coches



  }

}

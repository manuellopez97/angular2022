import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFab'
})
export class FiltroFabPipe implements PipeTransform {

  transform(coches:any[] , fab:string): any[] {
    if(coches && coches.length && fab != "0"){
    return coches.filter(coche => coche.fabricante == fab)
  }
  else return coches
  }

}

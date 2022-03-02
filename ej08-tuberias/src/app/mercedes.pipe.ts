import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mercedes'
})
export class MercedesPipe implements PipeTransform {

  transform(coches:any[]): any[] {
    let masBarato:any[] = []
    let menorPrecio=99999999

      for(let i=0;i<coches.length; i++){
        if(parseInt(coches[i].precio) < menorPrecio){
          menorPrecio = parseInt(coches[i].precio)
        }
      }
      masBarato = coches.filter( c => c.precio == menorPrecio)
        return masBarato
  }

}

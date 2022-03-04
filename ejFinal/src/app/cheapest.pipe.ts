import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cheapest'
})
export class CheapestPipe implements PipeTransform {

  transform(monedas: any[]): any[] {
    let masBarataPrecio = 9999999999
    let masBarata:any=[]
    for(let i=0; i<monedas.length;i++){
      if(monedas[i].price<masBarataPrecio){
        masBarataPrecio = monedas[i].price
      }
    }
    masBarata = monedas.filter( m => m.price == masBarataPrecio)
    
        return masBarata
  }

}

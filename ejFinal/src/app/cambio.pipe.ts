import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambio'
})
export class CambioPipe implements PipeTransform {

  transform(monedas: any[], cambio:number): any[] {
    return monedas.filter(m => m.ytd.price_change > cambio)
  }
}

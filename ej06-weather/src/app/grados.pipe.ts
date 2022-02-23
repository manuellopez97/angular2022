import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(ciudades:any, temp: any): any {
    let nuevaTemp = Math.trunc(temp -  273.15) + "ºC"
    return nuevaTemp;
  }

}

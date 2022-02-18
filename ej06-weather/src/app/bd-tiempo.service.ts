import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdTiempoService {
  private urlBase:string = 'http://api.openweathermap.org/data/2.5/weather?'
  private key:string = '8c5832bf6b14300069d047bd226c38ef'
  private param:any
  private ciudades:any
  constructor(private http:HttpClient) {}

  getParam(){
    return this.param
  }
  setParam(param:any){
    this.param=param
  }
  consulta(){
    this.http.get(this.urlBase + 'q='+this.getParam()+'&appid='+this.key).subscribe(
      (response) =>{
       this.ciudades = response
      })
  }
  getCiudades(){
    return this.ciudades
  }
}

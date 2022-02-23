import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdTiempoService {
  private urlBase:string = 'http://api.openweathermap.org/data/2.5/find?'
  private key:string = '8c5832bf6b14300069d047bd226c38ef'
  private weather:any
  constructor(private http:HttpClient) {}

  getTiempo(ciudad:any):any{
  this.http.get(this.urlBase + 'q='+ciudad+'&appid='+this.key).subscribe(
    (response:any)=>{
       this.weather = response.list
     }
   )
  }

  getWeather(){
    return this.weather
  }
}

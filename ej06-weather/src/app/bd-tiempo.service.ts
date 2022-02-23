import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdTiempoService {
  private urlBase:string = 'http://api.openweathermap.org/data/2.5/find?'
  private key:string = '8c5832bf6b14300069d047bd226c38ef'
  private weather:any
  private favoritos = new Array()
  private principal:any
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

  addFavs(ciudad:any){
    if(!this.favoritos.includes(ciudad)){
      this.favoritos.push(ciudad)
    }
  }

  getFavs(){
    return this.favoritos
  }

  removeFavs(ciudad:any){
    this.favoritos = this.favoritos.filter( c => c.id != ciudad.id )
  }

  resetFavs(){
    this.favoritos = []
  }

  setPrincipal(ciudad:any){
    this.principal = ciudad
  }

  getPrincipal(){
    return this.principal
  }
}

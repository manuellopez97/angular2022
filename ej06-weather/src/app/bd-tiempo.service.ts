import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdTiempoService {
  private urlBase:string = 'http://api.openweathermap.org/data/2.5/weather?'
  private key:string = '8c5832bf6b14300069d047bd226c38ef'
  private param:string
  private urlEntera:any
  constructor(private http:HttpClient) {
    this.param=this.getParam()

    console.log(this.param)
    http.get(this.urlBase + 'q='+this.getParam()+'&appid='+this.key).subscribe(
      (response) =>{
        this.urlEntera = response
      }
    )

   }

   getParam(){
     return this.param
   }
   setParam(param:string){
    this.param=param
   }

   getUrl():any{
     return this.urlEntera
   }

}

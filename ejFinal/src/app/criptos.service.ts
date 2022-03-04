import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriptosService {
  private URI:string = 'https://api.nomics.com/v1/currencies/ticker?key=ffe633befea9723a102bd4bef0ba55bb5bd741a1&'
  private criptos:any[] = []
  private cantidad:number = 0
  constructor(private http:HttpClient) {

   }

   getCriptosPorId(id:string){
    this.http.get(this.URI + 'ids='+id).subscribe(
      (response:any)=>{
        this.criptos = response
      })
   }

   getResultado(){
     return this.criptos
       }


       getCantidad(){
         return this.cantidad
       }
       setCantidad(cantidad:any){
         this.cantidad = cantidad
       }

}

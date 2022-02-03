import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdCochesService {

  private coches:any
  private urlBase:String = "https://my-json-server.typicode.com/manuellopez97/angular2022/"

  constructor(private http:HttpClient) {
    this.coches = new Array()
    http.get(this.urlBase + 'coches').subscribe(
      (response)=>{
        this.coches = response
      }
    )

  }

  getCoches(){
    return this.coches
  }
}

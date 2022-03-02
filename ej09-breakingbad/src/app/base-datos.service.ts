import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private URIChar:string = 'https://breakingbadapi.com/api/characters'
  private URIQuote:string = 'https://breakingbadapi.com/api/quotes'
  constructor(private http:HttpClient) { }

  getCharacters(){
    this.http.get(this.URIChar).subscribe({
      response=>{
      
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharListComponent } from './char-list/char-list.component';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private URIChar:string = 'https://breakingbadapi.com/api/characters'
  private URIQuote:string = 'https://breakingbadapi.com/api/quotes'
  private characters:any
  private quotes:any
  private favs:any[] = []
  private patron:string = ""
  constructor(private http:HttpClient) {
    this.favs = JSON.parse(localStorage.getItem("favs") as string)
   }

  getCharacters(){

    this.http.get(this.URIChar).subscribe(
      (response:any)=>{
        this.characters = response
      }
    )
    return this.characters

  }

  addFavs(character:any){
    if(!this.favs.includes(character))
    this.favs.push(character)
    localStorage.setItem("favs",JSON.stringify(this.favs))
  }

  getFavs(){
    return this.favs
  }

  removeFav(character:any){
    this.favs = this.favs.filter( (f:any) => f.char_id != character.char_id)
  }

  getQuote(){
    this.http.get(this.URIQuote).subscribe(
      (response) =>{
        this.quotes = response
      }
      )
      return this.quotes
  }

  setPatron(patron:string){
    this.patron = patron
  }

  getPatron(){
    return this.patron
  }

  setCharacter(patron:string){
    this.patron = patron
  }

  getCharacter(){
    return this.patron
  }
}

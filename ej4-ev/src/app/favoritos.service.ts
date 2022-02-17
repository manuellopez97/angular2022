import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favs:string[] = new Array()

  constructor() {
    if(localStorage.getItem("favs")){
      this.favs = JSON.parse(localStorage.getItem("favs") as string)
    }

   }

  addFav(id:string){
    if(!this.favs.includes(id)){
      this.favs.push(id)
      localStorage.setItem("favs",JSON.stringify(this.favs))
    }
    else{
      let posicion = this.favs.indexOf(id)
      this.favs.splice(posicion,1)
    }

  }

  getFavs(){return this.favs}
  isFav(id:string){
    return (this.favs.includes(id))
  }

  clearFavs(){

  }
}

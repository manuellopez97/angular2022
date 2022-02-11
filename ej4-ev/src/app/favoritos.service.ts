import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favs:string[] = []

  constructor() { }

  addFav(id:string){
    if(!this.favs.includes(id)){
      this.favs.push(id)
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
}

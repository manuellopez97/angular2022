import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
private favs:any[] = []
  constructor() {
    if(localStorage.getItem("favs"))
    this.favs = JSON.parse(localStorage.getItem("favs") as any)
  }

  addFavs(moneda:any){
    if(!this.favs.includes(moneda)){
      this.favs.push(moneda)
      localStorage.setItem("favs",JSON.stringify(this.favs))
    }
    }

    getFavs(){

      return this.favs
    }

    removeFavs(favorito:any){
      this.favs = this.favs.filter(m => m.id != favorito.id )
    }

}

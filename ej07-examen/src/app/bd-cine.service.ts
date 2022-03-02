import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdCineService {

  private URI = "https://omdbapi.com/?apikey=49b71604&s="
  private URI2 = "https://omdbapi.com/?apikey=49b71604&i="
  private peliculas:any = []
  private favs:any = []
  private detalles:any = "tt0372784"

  constructor(private http: HttpClient) { }

  getConsulta(titulo: string){
    this.http.get(this.URI+titulo).subscribe(
    (response:any)=>{
     this.peliculas = response.Search
    }
    )
  }
  getPeliculas(){
    return this.peliculas
  }

  addFavs(pelicula:any){
    if(!this.favs.includes(pelicula)){
      this.favs.push(pelicula)
    }
  }

  getFavs(){
    return this.favs
  }

  removeFavs(pelicula:any){
    this.favs = this.favs.filter((p:any) => p.imdbID != pelicula.imdbID)
  }

  setId(id:any){
   this.http.get(this.URI2 + id).subscribe(
    (response) =>{
    this.detalles = response
    }
    )
  }

  getDetalles(){
    return this.detalles
  }

}

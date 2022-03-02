import { Component, OnInit } from '@angular/core';
import { BdCineService } from '../bd-cine.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private bdPelis: BdCineService) { }

  ngOnInit(): void {
  }

  getConsulta(titulo:string){
    return this.bdPelis.getConsulta(titulo)
  }

  getPeliculas(){
   return this.bdPelis.getPeliculas()
  }

  addFavs(pelicula:any){
    this.bdPelis.addFavs(pelicula)
  }

}

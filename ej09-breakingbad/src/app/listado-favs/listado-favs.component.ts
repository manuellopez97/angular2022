import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-listado-favs',
  templateUrl: './listado-favs.component.html',
  styleUrls: ['./listado-favs.component.css']
})
export class ListadoFavsComponent implements OnInit {

  constructor(private bd:BaseDatosService) { }

  ngOnInit(): void {
  }

  addFavs(character:any){
    return this.bd.addFavs(character)
  }

  getFavs(){
    return this.bd.getFavs()
  }

}

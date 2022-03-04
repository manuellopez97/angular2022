import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';
import { FavoritosComponent } from '../favoritos/favoritos.component';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styleUrls: ['./listado-favoritos.component.css']
})
export class ListadoFavoritosComponent implements OnInit {

  constructor(private bd:FavoritosService) { }

  ngOnInit(): void {
  }

  addFavs(moneda:any){
    this.bd.addFavs(moneda)
  }

  getFavs(){
    return this.bd.getFavs()
  }

}

import { Component, OnInit } from '@angular/core';
import { BdCineService } from '../bd-cine.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private bdPelis:BdCineService) { }

  ngOnInit(): void {
  }
  getFavs(){
    return this.bdPelis.getFavs()
  }
  removeFavs(pelicula:any){
    this.bdPelis.removeFavs(pelicula)
  }
}

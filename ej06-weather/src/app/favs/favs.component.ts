import { Component, OnInit } from '@angular/core';
import { BdTiempoService } from '../bd-tiempo.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  constructor(private favoritos:BdTiempoService) { }

  ngOnInit(): void {
  }

  getFavs(){
    return this.favoritos.getFavs()
  }

  removeFavs(ciudad:any){
    this.favoritos.removeFavs(ciudad)
  }

  resetFavs(){
    this.favoritos.resetFavs()
  }

  setPrincipal(ciudad:any){
    this.favoritos.setPrincipal(ciudad)
  }

}

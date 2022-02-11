import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-coche-tarjeta',
  templateUrl: './coche-tarjeta.component.html',
  styleUrls: ['./coche-tarjeta.component.css']
})
export class CocheTarjetaComponent implements OnInit {
  @Input() car:any
  constructor(private favs : FavoritosService) { }

  ngOnInit(): void {
  }

  addFav(id:string){
    this.favs.addFav(id)
  }

  esFav(id:string){
   return  this.favs.isFav(id)
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  constructor(private favs: FavoritosService, private bdCoches:BdCochesService) { }

  ngOnInit(): void {
  }

  getFavs():any{
    let ids = this.favs.getFavs()
    let coches:any[] = []
    ids.forEach( id => {
      coches.push(this.bdCoches.getCochesById(id))
    })
    return coches

  }

}

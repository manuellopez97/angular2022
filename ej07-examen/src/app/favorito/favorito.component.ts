import { Component, Input, OnInit } from '@angular/core';
import { BdCineService } from '../bd-cine.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
@Input() pelicula:any
  constructor(private bdPelis:BdCineService) { }

  ngOnInit(): void {
  }
  removeFavs(pelicula:any){
    this.bdPelis.removeFavs(pelicula)
  }

  setId(id:any){
    this.bdPelis.setId(id)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
@Input() favorito:any
  constructor(private bd:FavoritosService) { }

  ngOnInit(): void {
  }

  removeFavs(favorito:any){
    return this.bd.removeFavs(favorito)
  }
}

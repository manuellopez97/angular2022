import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.css']
})
export class CriptoComponent implements OnInit {
@Input() cripto:any
  constructor(private bd:FavoritosService) { }

  ngOnInit(): void {
  }

  addFavs(moneda:any){
    return this.bd.addFavs(moneda)
  }

  


}

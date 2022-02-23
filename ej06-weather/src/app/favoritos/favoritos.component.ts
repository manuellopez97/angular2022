import { Component, OnInit } from '@angular/core';
import { BdTiempoService } from '../bd-tiempo.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
 weather:any
  constructor(private bdTiempo:BdTiempoService) {
  }

  ngOnInit(): void {

  }

  getTiempo(ciudad:any){

   this.bdTiempo.getTiempo(ciudad)
  }

  getWeather(){
    return this.bdTiempo.getWeather()
  }

  }


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
    console.log(this.bdTiempo.getWeather())
    return this.bdTiempo.getWeather()
  }

  addFavs(ciudad:any){
    this.bdTiempo.addFavs(ciudad)
    alert("Se ha añadido "+ciudad.name+ " a tu lista de favoritos")
  }

  }


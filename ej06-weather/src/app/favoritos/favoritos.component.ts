import { Component, OnInit } from '@angular/core';
import { BdTiempoService } from '../bd-tiempo.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
private param:string = ''

  constructor(private bdTiempo:BdTiempoService) {
  }

  ngOnInit(): void {

  }

  setParam(param:string){
    this.bdTiempo.setParam(param)
  }

  getParam(){
    return this.bdTiempo.getParam()
  }

  getCiudad(){
    return this.bdTiempo.getCiudades()
  }

}

import { Component, OnInit } from '@angular/core';
import { BdTiempoService } from '../bd-tiempo.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
private param:string = ''
private tiempo:any = this.getUrl()

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

  getUrl():any{
    return this.bdTiempo.getUrl()
  }
  getTiempo(){
    return this.tiempo
  }

}

import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  vistaTarjeta:boolean = true

  constructor(private bdCoches:BdCochesService) { }

  ngOnInit(): void {
  }

  getCoches(){
    return this.bdCoches.getCoches()
  }

  cambiarVista(){
    this.vistaTarjeta = !this.vistaTarjeta
  }
  isCargando(){
    return this.bdCoches.isCargando()
  }



}

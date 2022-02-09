import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { ParamsFiltrosService } from '../params-filtros.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  vistaTarjeta:boolean = true

  constructor(private bdCoches:BdCochesService, private paramsFiltros:ParamsFiltrosService) { }

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

  getFab(){
    return this.paramsFiltros.getFab()
  }

  getTec(){
    return this.paramsFiltros.getTec()
  }
  getPatron(){
    return this.paramsFiltros.getPatron()
  }


}

import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent implements OnInit {
  filtrar = false

  constructor(private bdCoches:BdCochesService) {
  }

  ngOnInit(): void {
  }

  cbChanged() {
    this.filtrar = !this.filtrar
  }

  getCoches() {
    return this.bdCoches.getCoches()
  }

  reduceStock(id:number) {
    this.bdCoches.reduceStock(id)
  }

  recuperarCoches(){
    this.bdCoches.populateCars()
  }

  recuperaStock(){
    this.bdCoches.enableStock()
  }

}

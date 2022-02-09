import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { ParamsFiltrosService } from '../params-filtros.service';

@Component({
  selector: 'app-aside-filtros',
  templateUrl: './aside-filtros.component.html',
  styleUrls: ['./aside-filtros.component.css']
})
export class AsideFiltrosComponent implements OnInit {

  constructor(private bdCoches:BdCochesService, private paramsFiltros:ParamsFiltrosService) { }

  ngOnInit(): void {
  }

  getFabricante(){
    return this.bdCoches.getFabricante()
  }

  getTecnologia(){
    return this.bdCoches.getTecnologia()
  }
  

  setPatron(patron:string){
    this.paramsFiltros.setPatron(patron)
  }

  setFab(fab:string){
    this.paramsFiltros.setFab(fab)
  }

  setTec(tec:string){
    this.paramsFiltros.setTec(tec)
  }

}

import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-aside-filtros',
  templateUrl: './aside-filtros.component.html',
  styleUrls: ['./aside-filtros.component.css']
})
export class AsideFiltrosComponent implements OnInit {

  constructor(private bdCoches:BdCochesService) { }

  ngOnInit(): void {
  }

  getFabricante(){
    return this.bdCoches.getFabricante()
  }

  getTecnologia(){
    return this.bdCoches.getFabricante()
  }

}

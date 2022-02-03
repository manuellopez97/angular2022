import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private bdCoches:BdCochesService) { }

  ngOnInit(): void {
  }

  getCoches(){
    return this.bdCoches.getCoches()
  }

}

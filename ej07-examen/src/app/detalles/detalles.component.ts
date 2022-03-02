import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdCineService } from '../bd-cine.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(
    private bdPelis: BdCineService
  ) { }

  ngOnInit(): void {
  }

  getDetalles(){
    return this.bdPelis.getDetalles()
  }


}

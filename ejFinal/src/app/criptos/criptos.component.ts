import { Component, OnInit } from '@angular/core';
import { CriptosService } from '../criptos.service';

@Component({
  selector: 'app-criptos',
  templateUrl: './criptos.component.html',
  styleUrls: ['./criptos.component.css']
})
export class CriptosComponent implements OnInit {

  constructor(private bd:CriptosService) { }

  ngOnInit(): void {
  }

  getCriptosPorId(id:string){
    return this.bd.getCriptosPorId(id)
  }

  getResultado(){
    return this.bd.getResultado()
  }

  setCantidad(cantidad:any){
    return this.bd.setCantidad(cantidad)
  }

  getCantidad(){
    return this.bd.getCantidad()
  }
}

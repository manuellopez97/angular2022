import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(private bd:BaseDatosService) { }

  ngOnInit(): void {
  }

  getQuote(){
    return this.bd.getQuote()
  }

  setPatron(patron:string){
    this.bd.setPatron(patron)
  }
  getPatron(){
    return this.bd.getPatron()
  }

}

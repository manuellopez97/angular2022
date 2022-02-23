import { Component, OnInit } from '@angular/core';
import { BdTiempoService } from '../bd-tiempo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private favoritos:BdTiempoService) { }

  ngOnInit(): void {
  }

  getPrincipal(){
     return this.favoritos.getPrincipal()

  }


}

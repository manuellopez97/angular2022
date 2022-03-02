import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bd:BaseDatosService) { }

  ngOnInit(): void {
  }

  getCharacters(){
    return this.bd.getCharacters()
  }

}

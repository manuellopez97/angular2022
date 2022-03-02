import { Component, Input, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {
@Input() favorito:any
  constructor(private bd:BaseDatosService) { }

  ngOnInit(): void {
  }

  removeFav(character:any){
    return this.bd.removeFav(character)
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})
export class CharListComponent implements OnInit {

  constructor(private bd:BaseDatosService) { }

  ngOnInit(): void {
  }

  getCharacters(){
    return this.bd.getCharacters()
  }

  addFavs(character:any){
    return this.bd.addFavs(character)
  }

  getCharacter(){
    return this.bd.getCharacter()
  }
  setCharacter(patron:string){
    return this.bd.setCharacter(patron)
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
@Input() character:any
  constructor() { }

  ngOnInit(): void {
  }

}

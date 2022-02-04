import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coche-fila',
  templateUrl: './coche-fila.component.html',
  styleUrls: ['./coche-fila.component.css']
})
export class CocheFilaComponent implements OnInit {
  @Input() car:any
  constructor() { }

  ngOnInit(): void {
  }

}

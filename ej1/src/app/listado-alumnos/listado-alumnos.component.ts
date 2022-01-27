import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  private alumnos

  constructor() { 
    this.alumnos = new Array()
    this.alumnos.push( {name: "Fulanito", age: "17"} )
    this.alumnos.push( {name: "Menganita", age: "18"} )
    this.alumnos.push( {name: "Jaimito", age: "19"} )
  }

  ngOnInit(): void {
  }

  getAlumnos() {
    return this.alumnos
  }
}

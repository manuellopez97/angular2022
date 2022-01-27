import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-ficha',
  templateUrl: './alumno-ficha.component.html',
  styleUrls: ['./alumno-ficha.component.css']
})
export class AlumnoFichaComponent implements OnInit {
  
  @Input() alumnoParam:any

  constructor() { }

  ngOnInit(): void {
  }

}

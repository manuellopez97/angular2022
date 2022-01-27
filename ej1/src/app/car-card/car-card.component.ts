import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car:any
  @Output() carBought = new EventEmitter<number>()

  constructor(private bdCar: BdCochesService) { }

  ngOnInit(): void {
  }

  buyCar() {
    this.carBought.emit(this.car.id)
  }
  eliminarCoche(){
    this.bdCar.eliminarCoches(this.car)
  }

}

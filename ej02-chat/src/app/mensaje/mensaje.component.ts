import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
@Input() mensajes: any
@Output() msgVoted= new EventEmitter<number>()
  constructor() {

  }

  ngOnInit(): void {
  }

  votar(){
    //avisar al padre para que incremente el contado de votos
    //de este mensaje sobre el que hemos hecho clic
    this.msgVoted.emit(this.mensajes.id)

  }
}

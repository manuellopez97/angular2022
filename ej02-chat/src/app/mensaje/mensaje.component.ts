import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BdChatService } from '../bd-chat.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
@Input() mensajes: any
  constructor(private bdChat: BdChatService) {

  }

  ngOnInit(): void {
  }

  votar(){
    this.bdChat.voteUp(this.mensajes.id)

  }

  borrar(){
    this.bdChat.borrarMsg(this.mensajes)
  }
}

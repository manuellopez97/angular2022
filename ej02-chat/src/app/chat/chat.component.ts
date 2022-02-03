import { Component, OnInit } from '@angular/core';
import { BdChatService } from '../bd-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private bdChat: BdChatService) {

  }

  ngOnInit(): void {

  }
  getMensaje(){
    return this.bdChat.getMensaje()
  }

  insertar(author:string,text:string){
    this.bdChat.insertNewMessage(author,text)
  }
}

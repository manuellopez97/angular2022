import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private chat

  constructor() {
    this.chat = [
      {
          author: "Luismi",
          text: "Hola, Fernando, qué tal con Symfony?",
          time: "19/01/2022 8:15",
          votes: 0,
          id:0
      },
      {
          author: "Fernando",
          text: "Hey, pues ya sabes, voy en coche-cama",
          time: "19/01/2022 9:10",
          votes: 0,
          id: 1
      },    {
          author: "Luismi",
          text: "Hazme una API REST para extraer datos de películas",
          time: "19/01/2022 9:28",
          votes: 0,
          id: 2
      },
      {
          author: "Fernando",
          text: "Mejor te hago un hospital y ya si eso te adaptas a mi BD",
          time: "19/01/2022 10:43",
          votes: 0,
          id: 3
      },
  ]
  }

  ngOnInit(): void {

  }

  getMensaje(){
    return this.chat
  }

  voteUp(id: number){
    this.chat[id].votes++
  }
}

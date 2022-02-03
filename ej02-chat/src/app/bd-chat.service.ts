import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BdChatService {



private chat:any= [
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
  constructor() {

    // if(localStorage.getItem("chat")){
    //   this.chat = localStorage.getItem("chat")
    // }
    // else this.chat = this.chat
   }

  getMensaje(){
    return this.chat
  }

  voteUp(id: number){
    this.chat[id].votes++
    this.saveChat
  }

  borrarMsg(mensajes:any){
    let posicion = this.chat.indexOf(mensajes)
    if(posicion != -1){
    this.chat.splice(posicion, 1)
    this.saveChat
    }

  }
  saveChat(){
    localStorage.setItem("chat",JSON.stringify(this.chat))
  }
  insertNewMessage(author:string,text:string){
      let id = this.chat[this.chat.length-1].id +1
      let time = new Date().toTimeString()

      this.chat.push({"id":id, "author":author,"text":text,"time":time,"votes":0})
      this.saveChat()
  }
}

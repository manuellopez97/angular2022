import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdCochesService {

  private coches
  private bdLocal = window.localStorage

  constructor() {
    if ( this.bdLocal.getItem("coches") ) {
      console.log("if")
      this.coches = JSON.parse( this.bdLocal.getItem("coches") )
    } else {
      console.log("else")
      this.coches = new Array()
      this.coches.push({id:25,fab:"Toyota",mod:"Auris",stock:2,img:""})
      this.coches.push({id:18,fab:"Ford",mod:"Mustang",stock:3,img:""})
      this.coches.push({id:33,fab:"Tesla",mod:"Cybertruck",stock:1,img:""})
      this.bdLocal.setItem("coches", JSON.stringify(this.coches) )
    }
   }

  getCoches() {
    return this.coches
  }

  reduceStock(id:number) {
    const miCoche = this.coches.find(coche => coche.id == id)
    if (miCoche && miCoche.stock) {
      miCoche.stock--
      //además de modificar this.coches tenemos que guardar esos
      // cambios en el localStorage
      this.bdLocal.setItem("coches", JSON.stringify(this.coches) )
    }
  }
  populateCars(){
    this.coches = new Array()
    this.coches.push({fabricante: "Ford",
                     modelo:"Mustang",
                     precio: 20000,
                     stock:3,
                     id:0,
                    imagen:"https://periodismodelmotor.com/wp-content/uploads/2020/02/Ford-Mustang-Shelby-GT350-de-Fathouse-1.jpg"})


    this.coches.push({fabricante: "Seat",
                     precio: 15000,
                     modelo:"Ibiza",
                     stock:2,
                     id:1,
                    imagen:"https://images1.autocasion.com/unsafe/1200x900/actualidad/wp-content/uploads/2021/04/seat-ibiza-2021-1.jpg"})

    this.coches.push({fabricante: "Porsche",
                     precio: 10000,
                     modelo:"Panamera",
                     stock:1,
                     id:2,
                    imagen:"https://www.autofacil.es/wp-content/uploads/2021/05/Porsche-Panamera_Turbo_S_E-Hybrid_Executive-2021-1600-02.jpg"})
                    this.saveCarsOnLocalStorage()

  }

  enableStock(){
    this.coches.forEach (c => c.stock = Math.floor(Math.random()*5)+1)
    this.saveCarsOnLocalStorage()
  }

  saveCarsOnLocalStorage(){
    this.bdLocal.setItem("coches", JSON.stringify(this.coches))
  }

  eliminarCoches(id){
    let posicion = this.coches.find(c => c.id == id)
    if(posicion != -1){
    this.coches.splice(posicion, 1)
    this.saveCarsOnLocalStorage()
  }
}
}

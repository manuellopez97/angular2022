import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsFiltrosService {
private patron:string =""
private fab:string ="0"
private tec:string ="0"
  constructor() {

   }

   getPatron(){return this.patron}
   getFab(){return this.fab}
   getTec(){return this.tec}

   setPatron(patron:string){this.patron=patron}
   setTec(tec:string){this.tec=tec}
   setFab(fab:string){this.fab=fab}
}

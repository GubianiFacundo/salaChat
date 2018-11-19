// import { Component } from '@angular/core';
// import { Sala } from 'src/app/clases/sala';

// @Component({
//   selector: 'app-room-component',
//   templateUrl: './room-component.component.html',
//   styleUrls: ['./room-component.component.css']
// })
// export class RoomComponentComponent {

//   salas: Sala[];
//   salaActual: Sala;
//   usurarioLocal: string;

//   constructor() {
//     this.salas = [];
//     // tslint:disable-next-line:prefer-const
//     let salaPublica = new Sala (1, 'Public');
//     salaPublica.agregarMensaje(salaPublica.id, 'Primer mensaje sala publica!', this.usurarioLocal);
//     salaPublica.agregarMensaje(salaPublica.id, 'Segundo mensaje sala publica!', this.usurarioLocal);
//     this.salas.push(salaPublica);

//     // tslint:disable-next-line:prefer-const
//     let salaPrivada = new Sala (2, 'Private');
//     salaPrivada.agregarMensaje(salaPublica.id, 'Primer mensaje sala privda!', this.usurarioLocal);
//     salaPrivada.agregarMensaje(salaPublica.id, 'Segundo mensaje sala privada!', this.usurarioLocal);
//     this.salas.push(salaPrivada);
//    }
// }


import { Component, Output, EventEmitter } from '@angular/core';
import {  Sala } from 'src/app/Clases/sala';
import {  Mensaje } from 'src/app/Clases/mensaje';

@Component({
  selector: 'app-room-component',
  templateUrl: './room-component.component.html',
  styleUrls: ['./room-component.component.css']
})
export class RoomComponentComponent {
  @Output() salaSeleccionada = new EventEmitter();
  mi_sala: Sala;
  salas: Sala[] = [];
  nuevasala:Sala;
  contadorsalas:number;
  nombre_sala: string;
  constructor() {
    this.contadorsalas = 4;
    this.mi_sala =  new Sala(0,''); //las salas con codigo 0 son invalidas
    for(var i =1; i<this.contadorsalas; i++)
    {
      this.salas.push(new Sala(i,'sala'+i)) //crear las primeras salas
    }  
   }
  seleccionar(salaselec:Sala)
  {
    this.mi_sala=salaselec;
    this.salaSeleccionada.emit(this.mi_sala);
  }
  crearSala()
  {
   if(this.nombre_sala != '')
   {
    this.contadorsalas++;
    this.nuevasala = new Sala(this.contadorsalas,  this.nombre_sala);
    this.salas.push(this.nuevasala);
    this.nombre_sala = '';
   }
  }
}

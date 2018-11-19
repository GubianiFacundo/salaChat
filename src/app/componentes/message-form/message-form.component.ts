import { Component, Input, Output,EventEmitter } from '@angular/core';
import {  Sala } from 'src/app/Clases/sala';
import {  Usuario } from '../../clases/usuario';
import {  Mensaje } from 'src/app/Clases/mensaje';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {

  gatitaMimosa: Usuario = new Usuario('gatitaMimosa', 1);
  mensajeMimoso: Mensaje;
  textoMimoso: string [] = ['hola miau', 'sos un programador mimoso??', 'ando buscando un poco de ayuda con una tarea en mi casa',
  'algo de las "redes"', 'pago con algunos mimos... ;))', 'otros programadores me han dicho que soy muy buena haciéndolos'];
  j: number = 0;

  @Input() sala_actual: Sala;
  @Input('user_actual') usuario1: Usuario;
  @Output() mensajeEnviado = new EventEmitter();
  texto_mensaje:string = '';
  mensajeNuevo:Mensaje;
  text_Send = document.getElementById('texto_enviar');
  send(){
    if(this.texto_mensaje != ''){
      this.mensajeNuevo = new Mensaje (this.sala_actual.id, this.texto_mensaje, this.usuario1.username);
      this.mensajeEnviado.emit(this.mensajeNuevo);
      this.texto_mensaje= '';
      setTimeout(this.respuesta(), 3000);
      this.j++;
    }
  }

  respuesta(){
    this.mensajeMimoso = new Mensaje(this.sala_actual.id, this.textoMimoso[this.j], this.gatitaMimosa.username);
    this.mensajeEnviado.emit(this.mensajeMimoso);
  }

  constructor() { }

  onKey(event: any)
  {
    if(event.key == 'Enter' && this.texto_mensaje != '')
    {
      document.getElementById("btok").click();
    }
  }

}

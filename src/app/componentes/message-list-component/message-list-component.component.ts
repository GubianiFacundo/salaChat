import { Component, Input } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { Sala } from 'src/app/Clases/sala';

@Component({
  selector: 'app-message-list-component',
  templateUrl: './message-list-component.component.html',
  styleUrls: ['./message-list-component.component.css']
})
export class MessageListComponentComponent {
  @Input() estasala:Sala;

  // mensajes: Mensaje[];

  constructor() { }

  funcion(){
    var objDiv = document.getElementById("divscroll");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

}

import { Component, Output } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  @Output() userLogger = new EventEmitter();

  miUser: Usuario = new Usuario(null, 0);
  nombre: string
  constructor() { }

  loguearUsuario() {
    if(this.miUser.username != '') {
      this.userLogger.emit(this.miUser.username);
    }
  }

  onKey(event: any)
  {
    if(event.key == 'Enter')
    {
      document.getElementById("btok").click();
    }
  }
}

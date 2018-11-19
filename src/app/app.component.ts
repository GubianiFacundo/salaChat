import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';
import { Sala } from 'src/app/Clases/sala';
import { Mensaje } from 'src/app/Clases/mensaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'SalaChat1';
  // usuarioLogueado: Usuario;

  // crearUsuario(username: string) {
  //   this.usuarioLogueado = new Usuario();
  //   this.usuarioLogueado.username = username;
  // }
  title = 'TSP Chat';
  contador: number = 0;
  usuario_loggeado: Usuario = new Usuario(null, 0);
  salaActual:Sala = new Sala(0,'no valida');

  crearUsuario(username: string) {
    this.contador = this.contador + 1;
    // this.usuario_loggeado = new Usuario (username, this.contador);
    this.usuario_loggeado.username = username;
    this.usuario_loggeado.id = this.contador;
  }
  
  seleccionarSala(seleccionada:Sala)
  {
    this.salaActual = seleccionada;
  }
  recibirMensaje(mensajeRecibido: Mensaje)
  {
    this.salaActual.addMensaje(mensajeRecibido);
  }

}

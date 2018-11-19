import { Mensaje } from 'src/app/clases/mensaje';

export class Sala {
id: number = 0;
name: string = '';
mensaje: Mensaje[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.mensaje = [];
    }

    // agregarMensaje(salaId: number, msg: string, username: string) {
    //     this.mensaje.push(new Mensaje(salaId, msg, username));
    // }

    addMensaje(mensajes: Mensaje) {
        this.mensaje.push(mensajes);
    }

    getMensaje(){
        return this.mensaje;
    }
}

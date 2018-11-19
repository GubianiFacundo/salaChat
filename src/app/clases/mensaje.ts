export class Mensaje {
    salaId: number;
    text: string;
    username: string;

    constructor(salaId: number, text: string, username: string) {
        this.salaId = salaId;
        this.text = text;
        this.username = username;
    }
}

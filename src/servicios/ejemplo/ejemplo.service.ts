import { Injectable } from '@nestjs/common';

@Injectable()
export class EjemploService {
    getTexto(parametro: string): string { // El parametro se le dice que tipo de dato le vas a pasar si no sabes se pone any y : string es el tipo de dato que vas a retornar
        return "El valor del parametro es:" + parametro;
    }
}

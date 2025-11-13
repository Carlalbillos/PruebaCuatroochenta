import {DiscoSinDatos} from './discoSinDatos.mjs';

export class Rueda extends DiscoSinDatos {

    constructor(nombre, material, diametro = "Desconocido") {
        super(nombre, material, diametro);
    }

    girarDisco() {
        super.girarDisco();
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
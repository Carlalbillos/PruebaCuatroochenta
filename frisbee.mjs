import {DiscoSinDatos} from "./discoSinDatos.mjs";

export class Frisbee extends DiscoSinDatos {

    constructor(nombre, diametro, material = "PVC") {
        super(nombre, material, diametro);
    }

    girarDisco() {
        console.log(`Giras el ${this.nombre}... ¡y sale volando!`);    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}

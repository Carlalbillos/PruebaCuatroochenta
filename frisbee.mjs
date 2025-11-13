import {DiscoGiratorio} from './discoGiratorio.mjs';

export class Frisbee extends DiscoGiratorio {

    constructor(nombre, diametro, material = "PVC") {
        super(nombre, material);
        this.diametro = diametro;
    }

    girarDisco() {
        console.log(`Rueda "${this.nombre}" girando sobre su eje`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Diámetro: ${this.diametro}`);
    }
}

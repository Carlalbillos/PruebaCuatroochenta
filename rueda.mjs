import {DiscoGiratorio} from './discoGiratorio.mjs';

export class Rueda extends DiscoGiratorio {

    constructor(nombre, diametro, material) {
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

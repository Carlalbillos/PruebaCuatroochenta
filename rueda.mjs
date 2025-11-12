import { DiscoGiratorio } from './discoGIratorio.mjs';

export class Rueda extends DiscoGiratorio {
    constructor(nombre, diametro, material = "Goma") {
        super(nombre, material);
        this.diametro = diametro;
    }

    girarDisco() {
        console.log(`Rueda "${this.nombre}" girando sobre su eje`);
    }

    mostrarInformacion() {
        console.log(`\n--- Información de la Rueda ---`);
        super.mostrarInformacion();
        console.log(`Diámetro: ${this.diametro}`);
    }
}

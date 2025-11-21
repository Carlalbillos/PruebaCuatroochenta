import {DiscoGiratorio} from './discoGiratorio.mjs';
// ========== CLASE INTERMEDIA PARA DISCOS SIN DATOS  ==========
// Representa objeto circular que no almacena datos
export class DiscoSinDatos extends DiscoGiratorio {

    constructor(nombre,
                material,
                diametro = "Desconocido",
    ) {
        super(nombre, material);
        this.diametro = diametro;
    }

    girarDisco() {
        console.log(`${this.nombre} girando sobre su eje...`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        if (this.marca) {
            console.log(`Marca: ${this.marca || "(sin marca)"}`);
        }
        console.log(`Diámetro: ${this.diametro}`)
    }
}
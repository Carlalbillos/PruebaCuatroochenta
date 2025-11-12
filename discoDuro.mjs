import { Disco } from './disco.mjs';

export class DiscoDuro extends Disco {
    // CONSTANTES ESPECÍFICAS DE DISCO DURO
    static CAPACIDAD_PREDETERMINADA = "1TB";
    static VELOCIDAD_PREDETERMINADA = 7200; // RPM

    constructor(nombre, capacidad = DiscoDuro.CAPACIDAD_PREDETERMINADA, contenido = "") {
        super(nombre, capacidad, contenido);
    }

    girarDisco() {
        console.log(`Disco duro girando a ${DiscoDuro.VELOCIDAD_PREDETERMINADA} RPM`);
    }

    leerDatos() {
        console.log(`Leyendo datos del disco duro mediante cabezal magnético: ${this.contenido}`);
    }

    mostrarInformacion() {
        console.log(`\n--- Información del Disco Duro ---`);
        super.mostrarInformacion();
        console.log(`Velocidad de giro: ${DiscoDuro.VELOCIDAD_PREDETERMINADA} RPM`);
    }
}
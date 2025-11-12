import { DiscoDatos } from './discoDatos.mjs';

export class DiscoDuro extends DiscoDatos {
    // CONSTANTES ESPECÍFICAS DE DISCO DURO
    static CAPACIDAD_PREDETERMINADA = 1000; // MEGABYTES
    static VELOCIDAD_PREDETERMINADA = 7200; // RPM

    constructor(nombre, capacidad = DiscoDuro.CAPACIDAD_PREDETERMINADA, contenido = "") {
        super(nombre, capacidad, contenido, "Aluminio con recubrimiento magnético");
    }

    girarDisco() {
        console.log(`Disco duro girando a ${DiscoDuro.VELOCIDAD_PREDETERMINADA} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del disco duro mediante cabezal magnético: ${this.contenido}`);
    }

    mostrarInformacion() {
        console.log(`\n--- Información del Disco Duro ---`);
        super.mostrarInformacion();
        console.log(`Velocidad de giro: ${DiscoDuro.VELOCIDAD_PREDETERMINADA} RPM`);
    }
}
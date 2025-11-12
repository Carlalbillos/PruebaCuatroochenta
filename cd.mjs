import { DiscoDatos } from './discoDatos.mjs';

export class Cd extends DiscoDatos {
    // CONSTANTES ESPECÍFICAS DE CD
    static CAPACIDAD_PREDETERMINADA = 700; // MEGABYTES
    static VELOCIDAD_PREDETERMINADA = 1000; // RPM

    constructor(nombre, capacidad = Cd.CAPACIDAD_PREDETERMINADA, contenido = "") {
        super(nombre, capacidad, contenido, "Policarbonato");
    }

    girarDisco() {
        console.log(`CD girando a ${Cd.VELOCIDAD_PREDETERMINADA} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del CD mediante láser: ${this.contenido}`);
    }

    mostrarInformacion() {
        console.log(`\n--- Información del CD ---`);
        super.mostrarInformacion();
        console.log(`Velocidad de giro: ${Cd.VELOCIDAD_PREDETERMINADA} RPM`);
    }
}
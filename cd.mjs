import {DiscoDatos} from './discoDatos.mjs';

export class Cd extends DiscoDatos {
    // CONSTANTES ESPECÍFICAS DE CD
    static CAPACIDAD_PREDETERMINADA = "72 minutos";
    static VELOCIDAD_PREDETERMINADA = 1000; // RPM
    static MATERIAL_PREDETERMINADO = "Policarbonato";
    static ESGRABABLE_PREDETERMINADO = false;

    constructor(
        nombre,
        capacidad = Cd.CAPACIDAD_PREDETERMINADA,
        contenido = "",
        material = Cd.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = Cd.VELOCIDAD_PREDETERMINADA,
        esGrabable = Cd.ESGRABABLE_PREDETERMINADO
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esGrabable);
    }

    girarDisco() {
        console.log(`CD girando a ${this.velocidad} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del CD mediante láser: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}

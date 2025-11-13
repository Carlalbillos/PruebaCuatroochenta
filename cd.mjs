import {DiscoConDatos} from './discoConDatos.mjs';

export class Cd extends DiscoConDatos {
    // CONSTANTES ESPECÍFICAS DE CD
    static CAPACIDAD_PREDETERMINADA = "72 minutos";
    static VELOCIDAD_PREDETERMINADA = 1000; // RPM
    static MATERIAL_PREDETERMINADO = "Policarbonato";
    static ESREGRABABLE_PREDETERMINADO = false;

    constructor(
        nombre,
        capacidad = Cd.CAPACIDAD_PREDETERMINADA,
        contenido = "",
        material = Cd.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = Cd.VELOCIDAD_PREDETERMINADA,
        esRegrabable = Cd.ESREGRABABLE_PREDETERMINADO
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esRegrabable);
    }

    girarDisco() {
        super.girarDisco();
    }

    leerDatos() {
        console.log(`\nLeyendo datos del CD mediante láser: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
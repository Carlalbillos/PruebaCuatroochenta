import {DiscoConDatos} from './discoConDatos.mjs';

export class Vinilo extends DiscoConDatos {
    // CONSTANTES ESPECÍFICAS DE Vinilo
    static VELOCIDAD_PREDETERMINADA = 33; // RPM
    static MATERIAL_PREDETERMINADO = "PVC"
    static ESREGRABABLE_PREDETERMINADO = false;

    constructor(
        nombre,
        capacidad,
        contenido = "",
        material = Vinilo.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = Vinilo.VELOCIDAD_PREDETERMINADA,
        esRegrabable = Vinilo.ESREGRABABLE_PREDETERMINADO,
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esRegrabable);
    }

    girarDisco() {
        super.girarDisco();
    }

    leerDatos() {
        console.log(`\nLeyendo datos del LP mediante aguja: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
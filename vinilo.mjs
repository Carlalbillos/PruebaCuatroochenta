import {DiscoDatos} from './discoDatos.mjs';

export class Vinilo extends DiscoDatos {
    // CONSTANTES ESPECÍFICAS DE Vinilo
    static VELOCIDAD_PREDETERMINADA = 33; // RPM
    static MATERIAL_PREDETERMINADO = "PVC"
    static ESGRABABLE_PREDETERMINADO = false;

    constructor(
        nombre,
        capacidad,
        contenido = "",
        material = Vinilo.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = Vinilo.VELOCIDAD_PREDETERMINADA,
        esGrabable = Vinilo.ESGRABABLE_PREDETERMINADO,
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esGrabable);
    }

    girarDisco() {
        console.log(`${this.nombre} girando a ${this.velocidad} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del LP mediante aguja: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
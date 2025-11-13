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
        esGrabable = Vinilo.ESGRABABLE_PREDETERMINADO,
    ) {
        super(nombre, capacidad, contenido, material, marca, esGrabable);
    }

    girarDisco() {
        console.log(`Disco duro girando a ${Vinilo.VELOCIDAD_PREDETERMINADA} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del LP mediante aguja: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
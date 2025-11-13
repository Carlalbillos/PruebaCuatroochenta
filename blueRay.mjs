import {DiscoDatos} from './discoDatos.mjs';

export class BlueRay extends DiscoDatos {
    // CONSTANTES ESPECÍFICAS DE BlueRay
    static CAPACIDAD_PREDETERMINADA = "25 GB";
    static VELOCIDAD_PREDETERMINADA = 2000; // RPM
    static MATERIAL_PREDETERMINADO = "Policarbonato";
    static ESGRABABLE_PREDETERMINADO = false;

    constructor(
        nombre,
        capacidad = BlueRay.CAPACIDAD_PREDETERMINADA,
        contenido = "",
        material = BlueRay.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = BlueRay.VELOCIDAD_PREDETERMINADA,
        esGrabable = BlueRay.ESGRABABLE_PREDETERMINADO
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esGrabable);
    }

    girarDisco() {
        console.log(`${this.nombre} girando a ${this.velocidad} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del BlueRay mediante láser: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}

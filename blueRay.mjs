import {DiscoConDatos} from './discoConDatos.mjs';

export class BlueRay extends DiscoConDatos {
    // CONSTANTES ESPECÍFICAS DE BlueRay
    static CAPACIDAD_PREDETERMINADA = "25 GB";
    static VELOCIDAD_PREDETERMINADA = 2000; // RPM
    static MATERIAL_PREDETERMINADO = "Policarbonato";
    static ESREGRABABLE_PREDETERMINADO = false;

    constructor(
        nombre,
        capacidad = BlueRay.CAPACIDAD_PREDETERMINADA,
        contenido = "",
        material = BlueRay.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = BlueRay.VELOCIDAD_PREDETERMINADA,
        esRegrabable = BlueRay.ESREGRABABLE_PREDETERMINADO
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esRegrabable);
    }

    girarDisco() {
        super.girarDisco();
    }

    leerDatos() {
        console.log(`\nLeyendo datos del BlueRay mediante láser: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
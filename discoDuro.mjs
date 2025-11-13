import {DiscoConDatos} from './discoConDatos.mjs';

export class DiscoDuro extends DiscoConDatos {
    // CONSTANTES ESPECÍFICAS DE DISCO DURO
    static CAPACIDAD_PREDETERMINADA = "1TB";
    static VELOCIDAD_PREDETERMINADA = 7200; // RPM
    static MATERIAL_PREDETERMINADO = "Aluminio con recubrimiento magnético";
    static ESREGRABABLE_PREDETERMINADO = true;

    constructor(
        nombre,
        capacidad = DiscoDuro.CAPACIDAD_PREDETERMINADA,
        contenido = "",
        material = DiscoDuro.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = DiscoDuro.VELOCIDAD_PREDETERMINADA,
        esRegrabable = DiscoDuro.ESREGRABABLE_PREDETERMINADO,
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esRegrabable);
    }

    girarDisco() {
        super.girarDisco();
    }

    leerDatos() {
        console.log(`\nLeyendo datos del disco duro mediante cabezal magnético: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}
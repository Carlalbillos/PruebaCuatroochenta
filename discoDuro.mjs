import {DiscoDatos} from './discoDatos.mjs';

export class DiscoDuro extends DiscoDatos {
    // CONSTANTES ESPECÍFICAS DE DISCO DURO
    static CAPACIDAD_PREDETERMINADA = "1TB";
    static VELOCIDAD_PREDETERMINADA = 7200; // RPM
    static MATERIAL_PREDETERMINADO = "Aluminio con recubrimiento magnético";
    static ESGRABABLE_PREDETERMINADO = true;


    constructor(
        nombre,
        capacidad = DiscoDuro.CAPACIDAD_PREDETERMINADA,
        contenido = "",
        material = DiscoDuro.MATERIAL_PREDETERMINADO,
        marca = "",
        velocidad = DiscoDuro.VELOCIDAD_PREDETERMINADA,
        esGrabable = DiscoDuro.ESGRABABLE_PREDETERMINADO,
    ) {
        super(nombre, capacidad, contenido, material, marca, velocidad, esGrabable);
    }

    girarDisco() {
        console.log(`Disco duro girando a ${this.velocidad} RPM`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos del disco duro mediante cabezal magnético: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
    }
}

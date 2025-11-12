import { DiscoGiratorio } from './discoGIratorio.mjs';

export class DiscoDatos extends DiscoGiratorio {
    marca = "";

    constructor(nombre, capacidad, contenido, material) {
        super(nombre, material);
        this.capacidad = capacidad;
        this.contenido = contenido;
    }

    girarDisco() {
        console.log(`${this.nombre} girando...`);
    }

    almacenarDatos(datos) {
        this.contenido = datos;
        console.log(`\nGuardando ${this.contenido}...`);
    }

    leerDatos() {
        console.log(`\nLeyendo datos: ${this.contenido}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Capacidad: ${this.capacidad} Megabytes`);
        console.log(`Contenido: ${this.contenido || '(vacío)'}`);
    }
}
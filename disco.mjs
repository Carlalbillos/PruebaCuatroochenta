export class Disco {
    marca = "";

    constructor(nombre, capacidad, contenido) {
        this.nombre = nombre;
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
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Capacidad: ${this.capacidad}`);
        console.log(`Contenido: ${this.contenido || '(vacío)'}`);
    }
}
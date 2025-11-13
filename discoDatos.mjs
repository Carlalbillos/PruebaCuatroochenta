import {DiscoGiratorio} from './discoGiratorio.mjs';
// ========== CLASE INTERMEDIA PARA DATOS  ==========
// Representa objeto circular que almacena datos
export class DiscoDatos extends DiscoGiratorio {

    constructor(nombre,
                capacidad,
                contenido = "",
                material = "Desconocido",
                marca = "",
                velocidad = 0,
                esGrabable = false
    ) {
        super(nombre, material);
        this.capacidad = capacidad;
        this.contenido = contenido;
        this.marca = marca;
        this.velocidad = velocidad;
        this.esGrabable = esGrabable;
    }

    girarDisco() {
        console.log(`${this.nombre} girando...`);
    }

    almacenarDatos(datos) {
        console.log(`Iniciando la grabación...`);
        if (this.esGrabable || this.contenido === "") {
            this.contenido = datos;
            console.log(`\nGrabación de ${this.contenido} completada.`);
        } else {
            console.log(`${this.nombre} no es un disco regrabable...`);
        }
    }

    leerDatos() {
        console.log(`\nLeyendo datos: ${this.contenido || "(vacío)"}`);
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Capacidad: ${this.capacidad}`);
        console.log(`Contenido: ${this.contenido || "(vacío)"}`);
        if (this.marca) {
            console.log(`Marca: ${this.marca || "(sin marca)"}`);
        }
        console.log(`Grabable: ${this.esGrabable ? "Sí" : "No"}`);
    }
}
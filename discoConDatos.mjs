import {DiscoGiratorio} from './discoGiratorio.mjs';
// ========== CLASE INTERMEDIA PARA DISCOS CON DATOS  ==========
// Representa objeto circular que almacena datos
export class DiscoConDatos extends DiscoGiratorio {

    constructor(nombre,
                capacidad,
                contenido = "",
                material = "Desconocido",
                marca = "",
                velocidad = 0,
                esRegrabable = false
    ) {
        super(nombre, material);
        this.capacidad = capacidad;
        this.contenido = contenido;
        this.marca = marca;
        this.velocidad = velocidad;
        this.esRegrabable = esRegrabable;
    }

    girarDisco() {
        console.log(`${this.nombre} girando a ${this.velocidad} RPM`);
    }

    almacenarDatos(datos) {
        console.log(`Iniciando la grabación...`);
        if (this.esRegrabable || this.contenido === "") {
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
        console.log(`Regrabable: ${this.esRegrabable ? "Sí" : "No"}`);
    }
}
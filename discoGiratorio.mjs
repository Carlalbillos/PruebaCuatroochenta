// =============== CLASE BASE  ===============
// Representa cualquier objeto circular que gira
export class DiscoGiratorio {
    constructor(nombre, material) {
        if (new.target === DiscoGiratorio) {
            throw new Error("DiscoGiratorio es una clase abstracta");
        }
        this.nombre = nombre;
        this.material = material;
    }

    girarDisco() {
        throw new Error("Método abstracto - debe ser implementado");
    }

    mostrarInformacion() {
        console.log(`\n--- Información de ${this.constructor.name} ---`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Material: ${this.material || "(vacío)"}`);
    }
}
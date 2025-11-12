import { Cd } from './cd.mjs';
import { DiscoDuro } from './discoDuro.mjs';
import {Rueda} from "./rueda.mjs";

// Usando constructores con valores predeterminados
const miCd1 = new Cd("Mi CD 1", Cd.CAPACIDAD_PREDETERMINADA, "Canciones Pop 2025");
const miDiscoDuro1 = new DiscoDuro("Mi Disco Duro1", 4000, "2");
const miRueda1 = new Rueda("Rueda de bicicleta", "27 pulgadas", "Aluminio y goma");

console.log("\n=== CD 1 ===");
miCd1.girarDisco();
miCd1.mostrarInformacion();
miCd1.leerDatos();
miCd1.almacenarDatos("Rock Clásico - Led Zeppelin, Pink Floyd");
miCd1.leerDatos();

console.log("\n=== Disco Duro 1 ===");
miDiscoDuro1.girarDisco();
miDiscoDuro1.mostrarInformacion();
miDiscoDuro1.leerDatos();
miDiscoDuro1.almacenarDatos("Instalación Windows 11");
miDiscoDuro1.leerDatos();

console.log("\n=== Rueda 1 ===");
miRueda1.girarDisco();
miRueda1.mostrarInformacion();
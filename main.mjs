import { Cd } from './cd.mjs';
import { DiscoDuro } from './discoDuro.mjs';

// Usando constructores con valores predeterminados
const miCd1 = new Cd("Mi CD", Cd.CAPACIDAD_PREDETERMINADA, "Canciones Pop 2025");
const miDiscoDuro1 = new DiscoDuro("Mi Disco Duro", "4TB", "Proyectos DAW 2");

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
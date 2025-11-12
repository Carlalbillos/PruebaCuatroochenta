import { Cd } from './cd.mjs';
import { DiscoDuro } from './discoDuro.mjs';

// Usando constructores con valores predeterminados
const miCd = new Cd("Mi CD", Cd.CAPACIDAD_PREDETERMINADA, "Canciones");
const miDiscoDuro = new DiscoDuro("Mi Disco Duro", DiscoDuro.CAPACIDAD_PREDETERMINADA, "Proyectos DAW 2");

console.log("=== CD 1 ===");
miCd.girarDisco();
miCd.leerDatos();
miCd.almacenarDatos("Rock Clásico - Led Zeppelin, Pink Floyd");
miCd.leerDatos();

console.log("\n=== Disco Duro 1 ===");
miDiscoDuro.girarDisco();
miDiscoDuro.leerDatos();
miDiscoDuro.almacenarDatos("Instalación Windows 11");
miDiscoDuro.leerDatos();
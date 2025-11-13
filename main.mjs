import {Cd} from './cd.mjs';
import {BlueRay} from './blueRay.mjs';
import {DiscoDuro} from './discoDuro.mjs';
import {Vinilo} from "./vinilo.mjs";
import {Rueda} from "./rueda.mjs";
import {Frisbee} from "./frisbee.mjs";

// Creamos los objetos
const miCd1 = new Cd(
    "Mi CD 1",
    "72 minutos",
    "Canciones Pop 2025",
    undefined,
    "Verbatim",
);
const miBlueRay1 = new BlueRay(
    "Mi BlueRay 1",
    "50 GB",
    undefined,
    undefined,
    "Verbatim",
);
const miDiscoDuro1 = new DiscoDuro(
    "Mi Disco Duro 1",
    "4TB",
    undefined,
    undefined,
    "WD"
);
const miVinilo1 = new Vinilo(
    "Mi vinilo 1",
    "45 minutos",
    "The Beatles - White Album"
);
const miRueda1 = new Rueda(
    "Rueda de bicicleta",
    "Aluminio y goma",
    "27 pulgadas"
);
const miFrisbee1 = new Frisbee(
    "Frisbee rojo",
    "PVC",
    "15 centímetros"
);

// Ejecutamos los comportamientos
console.log(`\n====== ${miCd1.nombre} ======`);
miCd1.girarDisco();
miCd1.mostrarInformacion();
miCd1.leerDatos();
miCd1.almacenarDatos("Rock Clásico - Led Zeppelin, Pink Floyd");
miCd1.leerDatos();

console.log(`\n====== ${miBlueRay1.nombre} ======`);
miBlueRay1.girarDisco();
miBlueRay1.mostrarInformacion();
miBlueRay1.leerDatos();
miBlueRay1.almacenarDatos("Interestellar (2014)");
miBlueRay1.leerDatos();

console.log(`\n======${miDiscoDuro1.nombre} ======`);
miDiscoDuro1.girarDisco();
miDiscoDuro1.mostrarInformacion();
miDiscoDuro1.leerDatos();
miDiscoDuro1.almacenarDatos("Instalación Windows 11");
miDiscoDuro1.leerDatos();

console.log(`\n======${miVinilo1.nombre} ======`);
miVinilo1.girarDisco();
miVinilo1.mostrarInformacion();
miVinilo1.leerDatos();

console.log(`\n======${miRueda1.nombre} ======`);
miRueda1.girarDisco();
miRueda1.mostrarInformacion();

console.log(`\n======${miFrisbee1.nombre} ======`);
miFrisbee1.girarDisco();
miFrisbee1.mostrarInformacion();
//l'elemento padre di ul
const body = html.children[1];
console.log("L'elemento padre di ul:", body);

// Seleziono il secondo elemento figlio di ul
const secondli = ul.children[1];
console.log("Il secondo elemento figlio di ul:", secondli);

// Seleziono l'elemento fratello successivo del secondo li
const thirdli = ul.children[2];
console.log("L'elemento fratello successivo del secondo li:", thirdli);

// Seleziono l'elemento fratello precedente del secondo li
var firstli = ul.children[0];
console.log("L'elemento fratello precedente del secondo li:", firstli);

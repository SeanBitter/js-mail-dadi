/*
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

const dadiComputer = [];
const dadiPlayer = [];
let sumComputer = 0;
let sumPlayer = 0;

for (let i = 1; i < 6; i++) {
    (dadiComputer[i] = (Math.floor(Math.random() * 6) + 1));
    dadiComputer.push(dadiComputer[i]);

    sumComputer += dadiComputer[i];
}

console.log("Il risultato del computer è " + sumComputer);

for (let i = 1; i < 6; i++) {
    (dadiPlayer[i] = (Math.floor(Math.random() * 6) + 1));
    dadiPlayer.push(dadiPlayer[i]);

    sumPlayer += dadiPlayer[i];
}

console.log("Il tuo risultato è " + sumPlayer);

if (sumPlayer > sumComputer) {
    console.log("Hai vinto!");
} else if (sumComputer > sumPlayer) {
    console.log("Hai perso :(");
} else {
    console.log("Pareggio!");
}
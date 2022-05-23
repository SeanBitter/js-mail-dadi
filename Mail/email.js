/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)
*/

// creo l'array e il prompt di accesso
const emailList = ["pippo@gmail.com", "pluto@outlook", "topolino@libero.it", "paperino@hotmail.com", "qui@alice.it", "quo@live.it", "qua@protonmail.com"]
let emailInsert = prompt("Inserisci la tua email");

let emailOk;

// verifico con un ciclo se l'email inserita è presente nell'array
for (let i = 0; i < emailList.length; i++) {
    if (emailInsert === emailList[i]) {
        emailOk = i;
    }
}

// stampo il risultato
if (emailOk === undefined) {
    console.log("L'indirizzo " + emailInsert + " non è presente nelle nostre liste");
} else {
    console.log("L'indirizzo " + emailInsert + " ha i permessi per accedere");
}

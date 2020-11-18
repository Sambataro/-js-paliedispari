// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.


var pariDispari = (prompt("scegli  pari o dispari"));


console.log(pariDispari);

var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));

console.log(numeroUtente);


function numeroRandom() {
  numeroComputer = Math.floor(Math.random() * 6);
}

numeroRandom();

console.log(numeroComputer);

var numeroFinale = numeroUtente + numeroComputer;

console.log(numeroFinale);

function pariOdispari() {

  if(numeroFinale % 2 == 0) {
    console.log("pari");
}

else {
    console.log("dispari.");
}
}

pariOdispari() ;

// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// Chiedere all’utente di inserire una parola.
var stampata = document.getElementById("stampa")
var buttonAnnulla = document.getElementById("annulla");



var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener("click",

// Creare una funzione per capire se la parola inserita è palindroma.
function palindromo(){
// come controllo se la parola è un palindromo?
// fix caratteri speciali e maiuscole
var parolaUtente = document.getElementById("parola").value;
var fixCaratteriSpeciali = parolaUtente.replace(/[^A-Z0-9]/ig, "").toLowerCase();
var controlloPalindromo = fixCaratteriSpeciali.split("").reverse().join("");

// utilizzo il controllo
if(fixCaratteriSpeciali == controlloPalindromo){

  document.getElementById('stampa').innerHTML= parolaUtente + " è un palindromo";
}else{
  document.getElementById('stampa').innerHTML= parolaUtente + " non è un palindromo";
}
stampata.className = "show";
}
// utilizzo la funzione
);

// annullo la funzione
buttonAnnulla.addEventListener("click",
function() {

  // pulizia  valori
  stampata.className = "hidden";
  document.getElementById("stampa").value = "";
}
);

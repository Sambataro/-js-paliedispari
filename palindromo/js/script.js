// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// Chiedere all’utente di inserire una parola.
var parolaUtente = prompt("inserisci una parola");


// Creare una funzione per capire se la parola inserita è palindroma.
function palindromo(){
// come controllo se la parola è un palindromo?
var fixCaratteriSpeciali = parolaUtente.replace(/[^A-Z0-9]/ig, "").toLowerCase();
var controlloPalindromo = parolaUtente.split("").reverse().join("");

// utilizzo il controllo
if(parolaUtente == controlloPalindromo){

  document.getElementById('stampa').innerHTML= parolaUtente + " è un palindromo";
}else{
  document.getElementById('stampa').innerHTML= parolaUtente + " non è un palindromo";
}
}
// utilizzo la funzione
palindromo(parolaUtente)

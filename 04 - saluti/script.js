/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
const greet = firstName => `Ciao ${firstName}.`;


// Invoca la funzione qui e stampa il risultato in console
console.log(greet(name));



//Risultato atteso se si passa 'Mario': // ciao Mario
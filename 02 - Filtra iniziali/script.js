/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterInitials(arr, initial) {
  const filteredNames = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toLowerCase() === initial) {
      filteredNames.push(arr[i]);
    }
  }
  return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterInitials(names, 'a'));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
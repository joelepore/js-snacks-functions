/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word) {
  word = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let nVowels = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      nVowels++;
    }
  }

  return nVowels;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
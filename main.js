console.log('funzia');

/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

let randomNumber = []
let userNumber = []

// creare 5 numeri random
// pusharli in pagina
// far partire timer 30 sec


const numberEL = document.getElementById('number-field')

for (let i = 0; i < 5; i++) {
    const numeroCasuale = Math.floor(Math.random() * 101)
    randomNumber.push(numeroCasuale);
}

console.log(randomNumber);

numberEL.innerHTML = randomNumber
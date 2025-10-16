console.log('funzia');

/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

let randomNumber = []
let userNumber = []
let timerEL = document.getElementById('timer')
let counter = 5

// creare 5 numeri random
// pusharli in pagina
// far partire timer 30 sec


const numberEL = document.getElementById('number-field')
// ciclo for per generare i 5 numeri random
for (let i = 0; i < 5; i++) {
    const numeroCasuale = Math.floor(Math.random() * 101)
    randomNumber.push(numeroCasuale);
}

console.log(randomNumber);
// formula per farmi vedere i 5 numeri in pagina
numberEL.innerHTML = randomNumber

console.log(counter);

// dopo 5 secondi mi fa scomparire i numeri
setTimeout(() => {
    document.getElementById("number-field").textContent = "Ora tocca a te";
}, 5000);
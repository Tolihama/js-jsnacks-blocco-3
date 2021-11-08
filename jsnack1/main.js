/* Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%. */

// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
/* - Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti */

// Player Init Proprieties
let code = '';
let firstName = '';
let lastName = '';
let age = 0;
let averageScorePerMatch = 0;
let threePointSuccessRate = 0;

/* 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100 */
// Player obj
const playerOne = randPlayer();

/* 3. Stampare Nome, cognome, età e codice giocatore. */
console.log(playerOne.firstName, playerOne.lastName, playerOne.age, playerOne.code);

/* 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate */
const playersList = [];

for (let i = 0; i < 10; i++) {
    playersList.push(randPlayer());
}

console.log('Lista giocatori completa:', playersList);

/**
 * FUNCTIONS
 */
// Player code generator
function codeGen() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
    let code = '';

    for (let i = 0; i < 3; i++) {
        code += chars[rand(0, chars.length - 1)];
    }
    for (let i = 0; i < 3; i++) {
        code += rand(0, 9);
    }

    return code;
}

// Random firstName
function randFirstName() {
    const names = [
        'Tim',
        'Tom',
        'James',
        'Carl',
        'Clark',
        'Fred',
        'Jerry'
    ];
    return names[rand(0, names.length - 1)];
}

// Random lastName
function randLastName() {
    const surnames = [
        'Lebron',
        'Pedretti'
    ];
    return surnames[rand(0, surnames.length - 1)];
}

// Random number generator
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random player generator
function randPlayer() {
    code = codeGen();
    firstName = randFirstName();
    lastName = randLastName();
    age = rand(15, 40);
    averageScorePerMatch = rand(0, 50);
    threePointSuccessRate = rand(0, 100);

    const player = {
        code,
        firstName,
        lastName,
        age,
        averageScorePerMatch,
        threePointSuccessRate,
    };

    return player;
}
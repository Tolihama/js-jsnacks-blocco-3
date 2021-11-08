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
const player = {
    code: '',
    firstName: 'Paul',
    lastName: 'Red',
    age: 22,
    averageScorePerMatch: 22,
    threePointSuccessRate: 100,
};

console.log('Init player obj', player);

/* 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100 */
player.code = codeGen();
player.averageScorePerMatch = rand(0, 50);
player.threePointSuccessRate = rand(0, 100);

console.log('Generation player stat', player);

/* 3. Stampare Nome, cognome, età e codice giocatore. */
console.log(player.firstName, player.lastName, player.age, player.code);


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

// Random number generator
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
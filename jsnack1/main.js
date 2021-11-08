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

//  1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
/* - Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti 
    2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
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
    let generatedPlayer;
    let coincidences;
    do {
        generatedPlayer = randPlayer();
        coincidences = playersList.filter(player => player.code === generatedPlayer.code).length;
    } while (coincidences !== 0);

    playersList.push(generatedPlayer);
}

console.table(playersList);

/* 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%. */
const bestPlayersList = playersList.filter(player => (player.averageScorePerMatch > 35 && player.threePointSuccessRate > 80));

console.table(bestPlayersList);

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

// Random number generator with decimals
function decimalRand(min, max, decimals) {
    // Set multiplier
    let mult = '1';
    for (let i = 0; i < decimals; i++) {
        mult += '0';
    }
    mult = parseInt(mult);

    // Output generation
    return rand(min, max * mult) / mult;
}

// Random integer number generator
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random player generator
function randPlayer() {
    const code = codeGen();
    const firstName = randFirstName();
    const lastName = randLastName();
    const age = rand(15, 40);
    const averageScorePerMatch = decimalRand(0, 50, 2);
    const threePointSuccessRate = decimalRand(0, 100, 2);

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
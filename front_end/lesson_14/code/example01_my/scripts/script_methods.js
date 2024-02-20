
// *  ---- Object methods ----  *

const playerJohn = {
    heigth: 170,
    weigth: 80,
    sport: 'regbi',
    'full name': 'John Doe',

    sing (songTheme){
        console.log(songTheme)
    }
}

const toDo = {
    0: 'get up',
    1: 'drink',
    2: 'eat'
}

const toDoKeys = Object.keys(toDo);
console.log(toDoKeys);

//const toDoKeys = Object.keys(playerJohn);
//console.log(toDoKeys);

// ---

//for(let i=0; i<toDoKeys.length; i++){
//   console.log(playerJohn[toDoKeys[i]]);
//}
        // --- или ---
//const arrValues = Object.values(playerJohn);
//console.log(arrValues);

// ---

const arrEntries = Object.entries(playerJohn);
//console.log(playerJohn);

// ---

const playerHeigth = 170;
const playerWeigth = 80;
const playerSport = 'regby';

const player = {
    // h: playerHeigth,
    // w: playerWeigth,
    // s: playerSport
    //  --- или
    playerHeigth,
    playerWeigth,
    playerSport
}
//console.log(player);

// ---

const objA = {};
const objB = {};

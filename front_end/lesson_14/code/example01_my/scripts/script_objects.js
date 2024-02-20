const playerHeigth = 170;
const playerWeigth = 80;
const playerSport = 'regby';

const h = 'heigth';

// * ---  объект в JS  --- *
const playerJohn = {
    heigth: 170,
    weigth: 80,
    sport: 'regbi',
    'full name': 'John Doe',

    sing (songTheme){
        console.log(songTheme)
    }
    //   sing: function(songTheme){
    //       console.log(songTheme)
    //   }  
    //   sing: (songTheme) => {
    //       console.log(songTheme)
    //   }   

}
//  -> в massive (arrey) [heigth, weigth, sport];

const concert = {
    long: 2,
    songs: ['spring', 'love', 'alkohol'],
    date: {
        dayOfWeek: 'monday',
        year: 2024,
        month: 'april',
        date: 13
    }
}

//  * --- варианты вывода на консоле --- *  //

console.log(playerJohn);
// console.log(playerJohn.heigth);

// console.log(playerJohn['heigth']);

// console.log(playerJohn['full name']);
// //console.log(playerJohn('full name'); -> ошибка

// console.log(playerJohn[h]);

// playerJohn.sing('goal');

/////////////////////////////////////////////

// * --- добавление ключей и свойств --- *

// console.log(playerJohn);
// playerJohn.speed = 90;
// console.log(playerJohn);

///////////////////////////////////////////

// * --- циклы --- * //
 
for (i in playerJohn){
//    console.log(i);
}

// for (i in playerJohn){
//     console.log(playerJohn[i]);
// }

const toDo = {
    0: 'get up',
    1: 'drink',
    2: 'eat'
}

const toDoArr = ['get up a', 'drink a', 'eat a'];

// console.log(toDo[0]);

// for(i in toDoArr){
//     console.log(toDoArr[i]);
// }
// for(let i=0; i< toDoArr.length; i++){
//     console.log(toDoArr[i]);
// }
/////////////////////////

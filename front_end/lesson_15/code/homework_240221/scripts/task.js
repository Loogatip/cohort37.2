
/*
    1.  Надо добавить каждому игроку ключ(свойство) 'goals' и туда записать случайное целое число от 0 до 20. 
        При этом должен быть сформирован новый массив.
    
    2.  Отфильтровать и вывести в консоль всех игроков, у которых рост выше или равен 180 и вес ниже 80.

    3.  Отсортировать игроков по количеству забитых голов.
*/

let players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];

    //  --- №1 ---

    // - этот вариант подсмотрел у Катерины на консультации (меняет исходный массив) -
//     const playersWithGoals = players.map(player => {
//         const copyPlayer = {...player};                             // -> не меняет исходник
//         copyPlayer['goals'] = Math.floor(Math.random()*20);
//         return copyPlayer;
//     })
// console.log(playersWithGoals);

function addGoals(players){

    const newPlayersArr = [];

    for (let i = 0; i < players.length; i++){

        const player = players[i];

        const playerInNewArray = {...player, goals: Math.floor(Math.random()*20)};
        newPlayersArr.push(playerInNewArray);
    }
    return newPlayersArr;
}
console.log(addGoals(players));

    //  --- №2 ----

    const filteredPlayers = players.filter(
        (player) => { return player.height >= 180 && player.weight < 80}
        );
console.log(filteredPlayers);

    //  --- №3 ----

    const playersForSort = addGoals(players);
    playersForSort.sort((key, value) => value.goals - key.goals);
console.log(playersForSort);

console.log(players);

// прототиное наследование

const human = {
    heigth: 180,
    wight: 80,
    sing() {
        console.log('I am')
    }
}

const player = {
    resultat: 2.5,
    __proto__: human    // -> __ двойное подчеркивание 'до' и 'после'
}

// for(let property in player) {
//     console.log(property);
// }
// console.log(player.hasOwnProperty('resultat'));

for(let property in player) {
    if(player.hasOwnProperty(property)) {
        console.log(property);
        console.log(player);
    }
}

const nameArray = ["Alex", "Bob", "Chris", "David", "Eva", "Frank", "Grace", "Helen", "Ian", "Jack", "Kate", "Leo", "Max", "Nora", "Oscar"];

function returnNameWithA(array) {
    const newArray = array.filter(element => element.toLowerCase().includes('a'));
    return newArray;
}
console.log(returnNameWithA(nameArray));

// console.log(player);

// getters and setters

// const playerJohn = {
//     name: "John",
//     surname: "Doe",
//     get fullName() {
//         return `${this.name} ${this.surname}`     // -> косые скобки
//     },

//     set fullName(value) {
//         const [firstName, lastName] = value.split(',');
//         this.name = firstName;
//         this.surname = lastName;
//     }
// }

// playerJohn.fullName = 'Johnny Depp';
// console.log(playerJohn.fullName);

// установка прототипа

// Object.setPrototypeOf(player, human);
// console.log(player);
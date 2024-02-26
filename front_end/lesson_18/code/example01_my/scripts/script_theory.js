
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
    //__proto__: human    // -> __ двойное подчеркивание 'до' и 'после'
}

// console.log(player);

// getters and setters

const playerJohn = {
    name: "John",
    surname: "Doe",
    get fullName() {
        return `${this.name} ${this.surname}`     // -> косые скобки
    },

    set fullName(value) {
        const [firstName, lastName] = value.split(',');
        this.name = firstName;
        this.surname = lastName;
    }
}

// playerJohn.fullName = 'Johnny Depp';
// console.log(playerJohn.fullName);

// установка прототипа

Object.setPrototypeOf(player, human);
console.log(player);
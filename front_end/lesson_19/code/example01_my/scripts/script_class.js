
//   ---  Classes  ---

class Player {
    constructor(name, weight, heigth, resultat) {
        this.heigth = heigth;
        this.weight = weight;
        this.resultat = resultat;
        this.name = name;
    }
    makeGoal() {                         
        console.log('GOAL!!!')
    }
}

// Player.prototype.makeGoal = function() {                    
//     console.log(`${this.name} making a GOAL!!!`);
// }

const playerJohn = new Player('John', 88, 180, 3.5);
const playerMike = new Player('Mike', 95, 175, 3);

//console.log(playerJohn);
//playerJohn.makeGoal();


// --- наследование классов
class chessPlayer extends Player {
    constructor(name, weight, heigth, speed) {
        super(name, weight, heigth, null)
        this.speed = speed;
    }
    makeStep() {
        console.log('I am making a step!!!');
        super.makeGoal();
    }
    makeGoal() {
        super.makeGoal();
        console.log('This was chessmate');
        console.log('Falling');
    }

    static theBetterPlayer(chessPlayer1, chessPlayer2) {
        return chessPlayer2.speed < chessPlayer1.speed ? chessPlayer2 : chessPlayer1
    }
}

const harry = new chessPlayer('Harry', 78, 175, 3);
const karlson = new chessPlayer('Magnus', 79, 180, 1);

// console.log(harry);
// harry.makeStep();
// harry.makeGoal();
console.log(chessPlayer.theBetterPlayer(harry,karlson));

// --- стандартные методы
// [1,2].length
// [1,2].forEach();
// Array.isArray();
// Object.keys();
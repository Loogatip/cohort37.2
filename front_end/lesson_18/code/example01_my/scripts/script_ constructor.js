
// Constructors

function Player(name, weigh, heigth, resultat) {
    this.heigth = heigth;
    this.weigh = weigh;
    this.resultat = resultat;
    this.name = name;
    // this.makeGoal = function() {                         // -> или так
    //     console.log('GOAL!!!')
    // }
} 

Player.prototype.makeGoal = function() {                    // -> или так
    console.log('${this.name} making a GOAL!!!');
}

const playerJohn = new Player('John', 88, 180, 3.5);
const playerMike = new Player('Mike', 95, 175, 3);

console.log(playerJohn);




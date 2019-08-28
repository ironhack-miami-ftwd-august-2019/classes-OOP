

class Animal {
    constructor(name,mainColor,sound){
      this.name = name;
      this.mainColor = mainColor;
      this.sound = sound;
    }
    scream(intensity) {
      console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
    // dance = () => {
    //     console.log(this.sound)
    //     setInterval(()=>{
    //       console.log(`dance dance ${this.sound} dance dance`) 
    //     }, 300) 
    // }
  }

  
let bigZ = new Animal('zebra', 'black', 'nay!!')

class Cat extends Animal {
  constructor(name,mainColor,sound, nbOfLegs){
    super(name,mainColor,sound);
    this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
  }
  purr(){
    console.log('purrrrrrrrrrrrrr')
  }
}

let fufu = new Cat('FuFu', 'cinnamon', 'meow', 3)




// Example of a VERY simple Monopoly game simulation
 
// let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// // Creation of the class
// class Player {
//   // The constructor is the method triggered with the `new` keyword 
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.position = 0;
//     this.cash = 1000;
//   }


//   // Method move
//   move() {
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   }
//   // Method displayInfo
//   displayInfo() {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   }
  
// }

// // --- Initialisation of players ---
// let player1 = new Player('Joaquim', 'red');
// let player2 = new Player('Maxence', 'blue');
// let player3 = new Player('Mostafa', 'black');
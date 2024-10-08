const expr = 'Papayas';

switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  

if (expr == 'Oranges') {
    console.log('Oranges are $0.59 a pound.');    
} else if (expr == 'Mangoes') {
    console.log('Mangoes and papayas are $2.79 a pound.');
} else if (expr == 'Papayas') {
    console.log('Mangoes and papayas are $2.79 a pound.');
} else {
    console.log(`Sorry, we are out of ${expr}.`);

}


let fruits = ['Apple', 'Banana'];
let first = fruits[0];
console.log(first)


const persona = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  


  for (let step = 0; step < 5; step++) {
    console.log('Walking east one step');
  }
  


  function duplicar(a) {
    return a * 2;
  }

  let duplicar1 = (a) => {
    return a * 2;
  }

  let duplicar2 = (a) => a * 2;



function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(funcionCualquiera) {
    var name = 'Juan Cabello';
    funcionCualquiera(name);
}

processUserInput(greeting);

function nuevoSaludo(nom) {
    console.log('Soy una funcion flecha que imprime ' + nom);
}

processUserInput( (n) => console.log('Soy una funcion flecha que imprime ' + n) )

processUserInput(nuevoSaludo);
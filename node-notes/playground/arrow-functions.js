var square = x => x * x;

var user = {
  name: 'Paolo',
  sayHi: () => {
    console.log(`Bonjour, je suis ${this.name}`);
  },
  sayHello: function() {
    console.log(`Bonjour, je suis ${this.name}`);
  },
  sayCiao() {
    console.log(`Bonjour, je suis ${this.name}`);
  }
}

console.log(square(9));

user.sayHi(); // ES6, this not bound (n'est pas reliée à l'object user) => undefined
user.sayHello(); // ES5, this bound, this relié à user
user.sayCiao(); // ES6, this bound, this relié à user

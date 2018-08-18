function Mammal(name, type = 'Mammal') {
  this.name = name;
  this.type = type;
  this.offspring = [];
}

Mammal.prototype.sayHello = function() {
  return `My name is ${this.name}, I'm a ${this.type}`;
};

Mammal.prototype.haveBaby = function(extra) {
  let baby;
  if (this.type === 'Cat') {
    baby = new Cat(`Baby ${this.name}`);
    baby.color = extra;
  } else if (this.type === 'Dog') {
    baby = new Dog(`Baby ${this.name}`);
    baby.breed = extra;
  } else {
    baby = new Mammal(`Baby ${this.name}`);
  }
  this.offspring.push(baby);
  return baby;
};

function Cat(name, color) {
  Mammal.call(this, name, 'Cat');
  this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.meow = function() {
  return 'meow';
};

function Dog(name, breed) {
  Mammal.call(this, name, 'Dog');
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  return 'RUFF RUFF';
};

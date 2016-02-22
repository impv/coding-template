var inherits = function(childCtor, parentCtor) {
  Object.setPrototypeOf(childCtor.prototype, parentCtor.prototype);
};


//------
var Drink = function(name, taste, color) {
  this.name = name;
  this.taste = taste;
  this.color = color;
}

Drink.prototype.getName = function() {
  return this.name;
}

Drink.prototype.getTaste = function() {
  return this.taste;
}

Drink.prototype.getColor = function() {
  return this.color;
}

//------
var Soda = function(name, taste, color, strength) {
  Drink.call(this, name, taste, color);
  this.strength = strength;
}

Soda.prototype.getStrength = function() {
  return this.strength;
}

inherits(Soda, Drink);

//-------

var Dekavita = new Soda('DekavitaC', 'Sweet', 'Yellow', 'Strong');

//-------

var Parson = function(name, age) {
  this.name = name;
  this.age = age;
}

Parson.prototype.sayAge = function() {
  console.log(this.age);
}

Parson.prototype.sayName = function() {
  console.log(this.name);
}


//-------

var Student = function(name, age, year) {
  Parson.call(this, name, age);
  this.year = year;
}

Student.prototype.sayYear = function() {
  console.log(this.year);
}

inherits(Student, Parson);

//-------

var Takehito = new Student('Takehito', 0, 2);
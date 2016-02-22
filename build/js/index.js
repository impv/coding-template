(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var inherits = function inherits(childCtor, parentCtor) {
  Object.setPrototypeOf(childCtor.prototype, parentCtor.prototype);
};

//------
var Drink = function Drink(name, taste, color) {
  this.name = name;
  this.taste = taste;
  this.color = color;
};

Drink.prototype.getName = function () {
  return this.name;
};

Drink.prototype.getTaste = function () {
  return this.taste;
};

Drink.prototype.getColor = function () {
  return this.color;
};

//------
var Soda = function Soda(name, taste, color, strength) {
  Drink.call(this, name, taste, color);
  this.strength = strength;
};

Soda.prototype.getStrength = function () {
  return this.strength;
};

inherits(Soda, Drink);

//-------

var Dekavita = new Soda('DekavitaC', 'Sweet', 'Yellow', 'Strong');

//-------

var Parson = function Parson(name, age) {
  this.name = name;
  this.age = age;
};

Parson.prototype.sayAge = function () {
  console.log(this.age);
};

Parson.prototype.sayName = function () {
  console.log(this.name);
};

//-------

var Student = function Student(name, age, year) {
  Parson.call(this, name, age);
  this.year = year;
};

Student.prototype.sayYear = function () {
  console.log(this.year);
};

inherits(Student, Parson);

//-------

var Takehito = new Student('Takehito', 0, 2);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFiZWwvaW5kZXguZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFdBQVcsU0FBWCxRQUFXLENBQVMsU0FBVCxFQUFvQixVQUFwQixFQUFnQztBQUM3QyxTQUFPLGNBQVAsQ0FBc0IsVUFBVSxTQUFWLEVBQXFCLFdBQVcsU0FBWCxDQUEzQyxDQUQ2QztDQUFoQzs7O0FBTWYsSUFBSSxRQUFRLFNBQVIsS0FBUSxDQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCO0FBQ3ZDLE9BQUssSUFBTCxHQUFZLElBQVosQ0FEdUM7QUFFdkMsT0FBSyxLQUFMLEdBQWEsS0FBYixDQUZ1QztBQUd2QyxPQUFLLEtBQUwsR0FBYSxLQUFiLENBSHVDO0NBQTdCOztBQU1aLE1BQU0sU0FBTixDQUFnQixPQUFoQixHQUEwQixZQUFXO0FBQ25DLFNBQU8sS0FBSyxJQUFMLENBRDRCO0NBQVg7O0FBSTFCLE1BQU0sU0FBTixDQUFnQixRQUFoQixHQUEyQixZQUFXO0FBQ3BDLFNBQU8sS0FBSyxLQUFMLENBRDZCO0NBQVg7O0FBSTNCLE1BQU0sU0FBTixDQUFnQixRQUFoQixHQUEyQixZQUFXO0FBQ3BDLFNBQU8sS0FBSyxLQUFMLENBRDZCO0NBQVg7OztBQUszQixJQUFJLE9BQU8sU0FBUCxJQUFPLENBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDaEQsUUFBTSxJQUFOLENBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixLQUF2QixFQUE4QixLQUE5QixFQURnRDtBQUVoRCxPQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FGZ0Q7Q0FBdkM7O0FBS1gsS0FBSyxTQUFMLENBQWUsV0FBZixHQUE2QixZQUFXO0FBQ3RDLFNBQU8sS0FBSyxRQUFMLENBRCtCO0NBQVg7O0FBSTdCLFNBQVMsSUFBVCxFQUFlLEtBQWY7Ozs7QUFJQSxJQUFJLFdBQVcsSUFBSSxJQUFKLENBQVMsV0FBVCxFQUFzQixPQUF0QixFQUErQixRQUEvQixFQUF5QyxRQUF6QyxDQUFYOzs7O0FBSUosSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFTLElBQVQsRUFBZSxHQUFmLEVBQW9CO0FBQy9CLE9BQUssSUFBTCxHQUFZLElBQVosQ0FEK0I7QUFFL0IsT0FBSyxHQUFMLEdBQVcsR0FBWCxDQUYrQjtDQUFwQjs7QUFLYixPQUFPLFNBQVAsQ0FBaUIsTUFBakIsR0FBMEIsWUFBVztBQUNuQyxVQUFRLEdBQVIsQ0FBWSxLQUFLLEdBQUwsQ0FBWixDQURtQztDQUFYOztBQUkxQixPQUFPLFNBQVAsQ0FBaUIsT0FBakIsR0FBMkIsWUFBVztBQUNwQyxVQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBWixDQURvQztDQUFYOzs7O0FBTzNCLElBQUksVUFBVSxTQUFWLE9BQVUsQ0FBUyxJQUFULEVBQWUsR0FBZixFQUFvQixJQUFwQixFQUEwQjtBQUN0QyxTQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLEdBQXhCLEVBRHNDO0FBRXRDLE9BQUssSUFBTCxHQUFZLElBQVosQ0FGc0M7Q0FBMUI7O0FBS2QsUUFBUSxTQUFSLENBQWtCLE9BQWxCLEdBQTRCLFlBQVc7QUFDckMsVUFBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVosQ0FEcUM7Q0FBWDs7QUFJNUIsU0FBUyxPQUFULEVBQWtCLE1BQWxCOzs7O0FBSUEsSUFBSSxXQUFXLElBQUksT0FBSixDQUFZLFVBQVosRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgaW5oZXJpdHMgPSBmdW5jdGlvbihjaGlsZEN0b3IsIHBhcmVudEN0b3IpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNoaWxkQ3Rvci5wcm90b3R5cGUsIHBhcmVudEN0b3IucHJvdG90eXBlKTtcbn07XG5cblxuLy8tLS0tLS1cbnZhciBEcmluayA9IGZ1bmN0aW9uKG5hbWUsIHRhc3RlLCBjb2xvcikge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnRhc3RlID0gdGFzdGU7XG4gIHRoaXMuY29sb3IgPSBjb2xvcjtcbn1cblxuRHJpbmsucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubmFtZTtcbn1cblxuRHJpbmsucHJvdG90eXBlLmdldFRhc3RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRhc3RlO1xufVxuXG5Ecmluay5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY29sb3I7XG59XG5cbi8vLS0tLS0tXG52YXIgU29kYSA9IGZ1bmN0aW9uKG5hbWUsIHRhc3RlLCBjb2xvciwgc3RyZW5ndGgpIHtcbiAgRHJpbmsuY2FsbCh0aGlzLCBuYW1lLCB0YXN0ZSwgY29sb3IpO1xuICB0aGlzLnN0cmVuZ3RoID0gc3RyZW5ndGg7XG59XG5cblNvZGEucHJvdG90eXBlLmdldFN0cmVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnN0cmVuZ3RoO1xufVxuXG5pbmhlcml0cyhTb2RhLCBEcmluayk7XG5cbi8vLS0tLS0tLVxuXG52YXIgRGVrYXZpdGEgPSBuZXcgU29kYSgnRGVrYXZpdGFDJywgJ1N3ZWV0JywgJ1llbGxvdycsICdTdHJvbmcnKTtcblxuLy8tLS0tLS0tXG5cbnZhciBQYXJzb24gPSBmdW5jdGlvbihuYW1lLCBhZ2UpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5hZ2UgPSBhZ2U7XG59XG5cblBhcnNvbi5wcm90b3R5cGUuc2F5QWdlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKHRoaXMuYWdlKTtcbn1cblxuUGFyc29uLnByb3RvdHlwZS5zYXlOYW1lID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG59XG5cblxuLy8tLS0tLS0tXG5cbnZhciBTdHVkZW50ID0gZnVuY3Rpb24obmFtZSwgYWdlLCB5ZWFyKSB7XG4gIFBhcnNvbi5jYWxsKHRoaXMsIG5hbWUsIGFnZSk7XG4gIHRoaXMueWVhciA9IHllYXI7XG59XG5cblN0dWRlbnQucHJvdG90eXBlLnNheVllYXIgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2codGhpcy55ZWFyKTtcbn1cblxuaW5oZXJpdHMoU3R1ZGVudCwgUGFyc29uKTtcblxuLy8tLS0tLS0tXG5cbnZhciBUYWtlaGl0byA9IG5ldyBTdHVkZW50KCdUYWtlaGl0bycsIDAsIDIpOyJdfQ==

'use strict';

var picOne = newPicture();

var img = [
  './img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg', './img/breakfast.jpg', './img/tauntaun.jpg', './img/wine-glass.jpg', './img/bubblegum.jpg', './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/unicorn.jpg', './img/usb.gif', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg', './img/sweep.png', './img/water-can.jpg'];

var previousImgs = [];

function randomNum() {
  Math.random
};

var allProducts = [];
var leftIndex = randomNum();
var leftImg = allProducts[leftIndex];
previousImgs.push(leftIndex);

var centerIndex = randomNum();
while (centerIndex === leftIndex) {
  centerIndex = randomNum();
}
var centerImg = allProducts[centerIndex];
previousImgs.push(centerIndex);

var rightIndex = randomNum();
while(rightIndex === leftIndex || rightIndex === centerIndex){
  var rightIndex = randomNum();
}
var rightImg = allProducts[leftIndex];
previousImgs.push(leftIndex);

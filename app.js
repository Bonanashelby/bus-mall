'use strict';

//working with Kayla and Caleb so our code may look similar
//var picOne = newPicture();

var imgContainer = document.getElementById('img-container');
var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');

var img = [
  './img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg', './img/breakfast.jpg', './img/tauntaun.jpg', './img/wine-glass.jpg', './img/bubblegum.jpg', './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/unicorn.jpg', './img/usb.gif', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg', './img/sweep.png', './img/water-can.jpg'];

var totalClicks = 0;
var clickLimits = 25;

function product(name){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  //this.path = 'img/' + name + jpg';
};

var previousImgs = [leftIndex, centerIndex, rightIndex];

function randNum(){
  return Math.floor(Math.floor(Math.random() * img.length));
};

/*function displayPics() {
  var leftIndex = randomNum();
  var centerIndex = randomNum();
  var rightIndex = randomNum();
}*/

var allProducts = [];

var leftIndex = randNum();
var leftImg = allProducts[leftIndex];
previousImgs.push(leftIndex);

var centerIndex = randNum();
while (centerIndex === leftIndex) {
  centerIndex = randNum();
}
var centerImg = allProducts[centerIndex];
previousImgs.push(centerIndex);

var rightIndex = randNum();
while(rightIndex === leftIndex || rightIndex === centerIndex){ var rightIndex = randNum();
}

var rightImg = allProducts[rightIndex];
previousImgs.push(rightIndex);

var leftImgElement = document.createElement('img');
leftImgElement.setAttribute('src', img[leftIndex]);
leftImgElement.setAttribute('id', img[leftIndex].name);
leftEl.appendChild(leftImgElement);

var centerImgElement = document.createElement('img');
centerImgElement.setAttribute('src', img[centerIndex]);
centerImgElement.setAttribute('id', img[centerIndex].name);
centerEl.appendChild(centerImgElement);

var rightImgElement = document.createElement('img');
rightImgElement.setAttribute('src', img[rightIndex]);
rightImgElement.setAttribute('id', img[rightIndex].name);
rightEl.appendChild(rightImgElement);



/*
//CLASS NOTES BEGIN HERE
//define the variables to access the elements from the DOM.
var imgContainer = document.getElementById('imgContainer');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

//define global variables
var totalClicks = 0;
var clickLimits = 25;

var allProducts = [];
var currentlyShowing = [];

//store all image names in an array
var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep','tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//define the product constructor
function Product(name) {
  this.name = name,
  this.views = 0,
  this.clicks = 0,
  this.path = 'img/ ' + name + '.jpg';
};

//create the array of all products
for (var i = 0; i < imgNames.length; i++) {
  allProducts.push(new Product(imgNames[i]));
}
// picNames[i] first thing, then new Product, then it’ll push to allProducts

//generate a random number for accessing each product in the allProducs array.
function randNum() {return Math.floor(Math.random() * allProducts.length);
}

//the primary function to display new images
function displayImgs () {
  var leftIndex = randNum();
  var centerIndex = randNum ();
  var rightIndex = randNum ();

  console.log('Starting left index: ', leftIndex);
  console.log('Starting center index: ', centerIndex);
  console.log('Starting right index: ', rightIndex);
  while (currentlyShowing.include(leftIndex)) {
    leftIndex = randNum ();
  }

  while ( centerIndex === leftIndex || currentlyShowing.includes(centerIndex)) {
    CenterIndex = randNum ();
    console.log('New left: ', leftIndex);
  }

  while (rightIndex === leftIndex || rightIndex === centerIndex || currentlyShowing.includes(rightIndex)) {
    rightIndex = ranNum();
    console.log('New center: ', centerIndex);
    console.log('New right: ', rightIndex);
  }

  var leftProduct = allProducts[leftIndex];
  leftProduct.views += 1;

  left.removeChild(left);
  leftImg = document.createElement('img');
  left.setAttribute('src', leftProduct.path);
  left.setAttribute('alt', leftProduct.name);
  left.appendChild(left);
  //left.src= ;
  //console.log(allProducts[leftIndex].name + ‘has been shown ‘ + allProducts[leftIndex].views + ‘ times’);

  var centerProduct = allProducts[centerIndex];
  centerProduct.views += 1;

  center.removeChild(center);
  centerImg = document.createElement('img');
  center.setAttribute('src', centerProduct.path);
  center.setAttribute('alt', centerProduct.name);
  center.appendChild(center);
  //center.src= ;
  //console.log(allProducts[centerIndex].name + ‘has been shown ‘ + allProducts[centerIndex].views + ‘ times’);

  var rightProduct = allProducts[rightIndex];
  rightProduct.views += 1;

  right.removeChild(right);
  rightImg = document.createElement('img');
  right.setAttribute('src', rightProduct.path);
  right.setAttribute('alt', rightProduct.name);
  right.appendChild(right);
  //right.src= ;
  //console.log(allProducts[rightIndex].name + ‘has been shown ‘ + allProducts[rightIndex].views + ‘ times’);

  currentlyShowing = [leftIndex, centerIndex, rightIndex];
}*/

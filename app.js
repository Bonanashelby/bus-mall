'use strict';

//working with Kayla and Caleb so our code may look similar

//access html elements
var imgContainer = document.getElementById('img-container');
var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');
var list = document.getElementById('list');

//var img = [
//  './img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg', './img/breakfast.jpg', './img/tauntaun.jpg', './img/wine-glass.jpg', './img/bubblegum.jpg', './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/unicorn.jpg', './img/usb.gif', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg', './img/sweep.png', './img/water-can.jpg'];

var allProducts = [];
var totalClicks = 0;
var clickLimits = 25;
var previousImgs = [];

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'tauntaun',
  'wine-glass', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'unicorn',
  'usb', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'water-can'];

//product constructor
function product(name, id, path){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
};
//create function for all products & push to their array
function createProducts(){
  for (var i = 0; i < productNames.length; i++) {
    var name = productNames[i];
    var newItem = new Product(name);
    allProducts.push(newItem);
  }
}

function randNum(){
  return Math.floor(Math.random() * productNames.length);
};

function displayImgs() {
  var leftIndex = randomNum();
  var centerIndex = randomNum();
  var rightIndex = randomNum();

  console.log('Left Index: ' + leftIndex);
  console.log('Center Index: ' + centerIndex);
  console.log('Right Index: ' + rightIndex);
//left image generator
  while(previousImgs.includes(leftIndex)){
    var leftIndex = randomNum ();
    console.log('New left: ' + leftIndex);
  }

  while(centerIndex === leftIndex || previousImgs.includes(centerIndex)){
    var centerIndex = randomNum();
    console.log('New Center:' + centerIndex);
  }

  while(rightIndex === leftIndex || rightIndex === centerIndex || previousImgs.includes(rightIndex)) {
    var rightIndex = randomNum();
    console.log('New Right: ' + rightIndex);
  }

  previousImgs = [leftIndex, centerIndex, rightIndex];

  console.log(previousImgs);

/*
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
*/
  var leftImgElement = document.createElement('img');
  leftImgElement.setAttribute('src', [allProducts[previousImgs[0]].path]);
  leftImgElement.setAttribute('alt',[allProducts[previousImgs[0]].name]);
  imgContainer.appendChild(leftImgElement);

  var centerImgElement = document.createElement('img');
  centerImgElement.setAttribute('src', [allProducts[previousImgs[1]].path]);
  centerImgElement.setAttribute('id', [allProducts[previousImgs[1]].name]);
  imgContainer.appendChild(centerImgElement);

  var rightImgElement = document.createElement('img');
  rightImgElement.setAttribute('src', [allProducts[previousImgs[2]].path]);
  rightImgElement.setAttribute('id', [allProducts[previousImgs[2]].name]);
  imgContainer.appendChild(rightImgElement);
}
//returns previousImgs:

createProducts();
generateImg();

//on-click Listener
imgContainer.addEventListener('click', handleImagesOnClick);
//event listener for one box with all 3 imgNames
function handleImagesOnClick(event) {
  console.log(event.target.alt);
  for (var j = 0; j < allProducts.length; j++) {
    if (event.target.alt === allProducts[j].name) {
      allProducts[j].clicks += 1;
    }
  }

  event.preventDefault();
  imgContainer.innerHTML = '';
  totalClicks += 1;

  console.log('Total Clicks: ' + totalClicks);
  generateImg();
}

if (totalClicks === 25) {
  imgContainer.removeEventListener();
  for (var t = 0; t < allProducts.length; t++) {

  }
}
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

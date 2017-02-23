'use strict';

//working with Kayla and Caleb so our code may look similar

//access html elements
var imgContainer = document.getElementById('img-container');
var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');
var clicks = document.getElementById('clicks');

var allProducts = [];
var totalClicks = 0;
var clickLimits = 25;
var previousImgs = [];

var productNames = [
  { name: 'bag', path: './img/bag.jpg' },
  { name: 'banana', path: './img/banana.jpg' },
  { name: 'bathroom', path: './img/bathroom.jpg'},
  { name: 'boots', path: './img/boots.jpg'},
  { name: 'breakfast', path: './img/breakfast.jpg'},
  { name: 'tauntaun', path: './img/tauntaun.jpg'},
  { name: 'wine-glass', path: './img/wine-glass.jpg'},
  { name: 'bubblegum', path: './img/bubblegum.jpg'},
  { name: 'chair', path: './img/chair.jpg'},
  { name: 'cthulhu', path: './img/cthulhu.jpg'},
  { name: 'dog-duck', path: './img/dog-duck.jpg'},
  { name: 'dragon', path: './img/dragon.jpg'},
  { name: 'unicorn', path: './img/unicorn.jpg'},
  { name: 'usb', path: './img/usb.gif'},
  { name: 'pen', path: './img/pen.jpg'},
  { name: 'pet-sweep', path: './img/pet-sweep.jpg'},
  { name: 'scissors', path: './img/scissors.jpg'},
  { name: 'shark', path: './img/shark.jpg'},
  { name: 'sweep', path: './img/sweep.png'},
  { name: 'water-can', path: './img/water-can.jpg'}
];

//product constructor
function Product(name, path){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = path;
};
//create function for all products & push to their array
function createProducts(){
  for (var i = 0; i < productNames.length; i++) {
    var productInfo = productNames[i];
    var newItem = new Product(productInfo.name, productInfo.path);
    allProducts.push(newItem);
  }
  console.log('allProducts: ', allProducts);
}

function randomNum(){
  return Math.floor(Math.random() * productNames.length);
};

function displayFinalResults() {
  console.log('displayFinalResults');
  for (var i = 0; i < allProducts.length; i++) {
    var productClicksEl = document.createElement('li');
    console.dir(productClicksEl);
    clicks.appendChild(productClicksEl);
    productClicksEl.textContent = allProducts[i].name + ': clicks ' + allProducts[i].clicks + ', views ' + allProducts[i].views;
  }
}

function generateImg() {
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

  var leftImgElement = document.createElement('img');
  leftImgElement.setAttribute('src', allProducts[previousImgs[0]].path);
  leftImgElement.setAttribute('alt',allProducts[previousImgs[0]].name);
  imgContainer.appendChild(leftImgElement);

  var centerImgElement = document.createElement('img');
  centerImgElement.setAttribute('src', allProducts[previousImgs[1]].path);
  centerImgElement.setAttribute('id', allProducts[previousImgs[1]].name);
  imgContainer.appendChild(centerImgElement);

  var rightImgElement = document.createElement('img');
  rightImgElement.setAttribute('src', allProducts[previousImgs[2]].path);
  rightImgElement.setAttribute('id', allProducts[previousImgs[2]].name);
  imgContainer.appendChild(rightImgElement);
}
//returns previousImgs:

createProducts();
generateImg();

//on-click Listener
imgContainer.addEventListener('click', handleImagesOnClick);
//event listener for one box with all 3 imgNames
function handleImagesOnClick(event) {
  console.log(event);
  for (var j = 0; j < allProducts.length; j++) {
    if (event.target.alt === allProducts[j].name) {
      allProducts[j].clicks += 1;
      console.log('allProducts[j]:', allProducts[j]);
    }
  }

  event.preventDefault();
  imgContainer.innerHTML = '';
  totalClicks += 1;

  console.log('Total Clicks: ' + totalClicks);
  generateImg();

  if (totalClicks >= 25) {
    imgContainer.removeEventListener('click', handleImagesOnClick);
    displayFinalResults();
  }
}

/* CLASS NOTES - 2/22 - below displayList();

  }else{
    displayList();
    saveProductsToLocalStorage(allProducts);
  }
}
function saveProductsToLocalStorage(){
  localStorage.allProducts = JSON.stringify(allProducts);
  console.log("saved to local storage");
}

imgContainer.addEventListener('click', handleImagesOnClick);
displayImgs();

*/
/*
//CLASS NOTES 2/21 BEGIN HERE
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

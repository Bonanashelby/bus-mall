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

//function to display clicks, views and names
function displayFinalResults() {
  console.log('displayFinalResults');
  for (var i = 0; i < allProducts.length; i++) {
    //var productClicksEl is the bucket to catch the document.createElement('li') which is the list in the html
    var productClicksEl = document.createElement('li');
    console.dir(productClicksEl);
    //clicks is the child to productClicksEl
    clicks.appendChild(productClicksEl);
    //productClicksEl.textContent is the bucket for the allProducts[i] object that has views, names & clicks
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
  leftImgElement.setAttribute('id',allProducts[previousImgs[0]].name);
  allProducts[previousImgs[0]].views++;
  imgContainer.appendChild(leftImgElement);

  var centerImgElement = document.createElement('img');
  centerImgElement.setAttribute('src', allProducts[previousImgs[1]].path);
  centerImgElement.setAttribute('id', allProducts[previousImgs[1]].name);
  allProducts[previousImgs[1]].views++;
  imgContainer.appendChild(centerImgElement);
  //allProducts[previousImgs[2]].views++ It recog it and says I've already seen it
  var rightImgElement = document.createElement('img');
  rightImgElement.setAttribute('src', allProducts[previousImgs[2]].path);
  rightImgElement.setAttribute('id', allProducts[previousImgs[2]].name);
  allProducts[previousImgs[2]].views++;
  imgContainer.appendChild(rightImgElement);
}
//returns previousImgs:

createProducts();
generateImg();
//getting our local storage back - only if there is something there to get back
if (localStorage.allProducts) {
  //declared localStorage.allProducts in eventHandler
  var storedProductData = JSON.parse(localStorage.allProducts);
  //for loop to pull from storedProductData
  for (var i = 0; i < storedProductData.length; i++) {
    //access allProducts[i] views and add storedProductData views to it
    allProducts[i].views += storedProductData[i].views;
    //access allProducts[i] clicks and add storedProductData clicks to it
    allProducts[i].clicks += storedProductData[i].clicks;
  }
}

//on-click Listener
imgContainer.addEventListener('click', handleImagesOnClick);
//event listener for one box with all 3 imgNames
function handleImagesOnClick(event) {
  console.log(event);
  for (var j = 0; j < allProducts.length; j++) {
    if (event.target.id === allProducts[j].name) {
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
    //connected to function displayFinalResults up top
    displayFinalResults();
    createChart();
    //telling localStorage at allProducts put it into a string to send to localStorage
    localStorage.allProducts = JSON.stringify(allProducts);
  }
}
//starts data for chart
var imgNamesChart = [];
var clicksForChart = [];
var viewsForChart = [];

function createChartData (){
  for (var i = 0; i < allProducts.length; i++) {
    imgNamesChart.push(allProducts[i].name);
    clicksForChart.push(allProducts[i].clicks);
    viewsForChart.push(allProducts[i].views);
  }
  console.log(imgNamesChart);
  console.log(clicksForChart);
  console.log(viewsForChart);
}

//Create chart starts here
function createChart(){
  var ctx = document.getElementById('chart').getContext('2d');
  createChartData();
  //var data = allProducts[i].clicks;
  var labelColors = 'blue';

  var chartData = {
    type: 'bar',
    data: {
      labels: imgNamesChart,
      datasets: [{
        label: 'Number of Views',
        data: viewsForChart,
        backgroundColor: '#52f2a6',
      },
      {
        label: 'Number of Votes',
        data: clicksForChart,
        backgroundColor: '#F06848',
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };

  var myChart = new Chart(ctx, chartData);
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

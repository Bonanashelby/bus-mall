'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var data = allProducts[i].clicks;
var labelColors = ['blue'];

var chartData = {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes / Color',
      data: data,
      backgroundColor: labelColors,
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

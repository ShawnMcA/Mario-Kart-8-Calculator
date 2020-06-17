
// ========== Statistics Graph ========== //

// Graph options 
const options = {
  // Main dataset 
  series: [
    {
      name: "",
      data: []
    }
  ],

  // Chart Options
  chart: {
    toolbar: {
      show: false
    },
    type: 'radar',
    width: '100%'
  },

  // Data labels
  dataLabels: {
    enabled: false
  },

  // Overall chart fill
  fill: {
    colors: ['#f05562']
  },

  // Chart outline
  stroke: {
    show: false
  },

  // Key chart markers
  markers: {
    colors: ['#f05562'],
    size: 2
  },

  // X axis chart categories
  xaxis: {
    categories: ['Ground Speed', 'Air Speed', 'Water Speed', 'Anti-Gravity Speed', 'Acceleration', 'Weight', 'Ground Handling', 'Air Handling', 'Water Handling', 'Anti-Gravity Handling', 'On-Road Traction', 'Off-Road Traction', 'Mini Turbo'
    ],
  },

  // Y axis chart information
  yaxis: {
    tickAmount: 6,
    min: 0,
    max: 6
  },

  responsive: [
    {
      breakpoint: 768,
      options: {

        chart: {
          type: 'bar',
          height: 300
        },

        // Chart type
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },

        xaxis: {
          tickAmount: 6,
          min: 0,
          max: 6
        }
      }
    }
  ]
};

// stats graph
export const chart = new ApexCharts(document.getElementById('stat-chart'), options);

chart.render();
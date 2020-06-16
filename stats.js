const options = {
  series: [
    {
      name: "",
      data: []
    }
  ],

  chart: {
    toolbar: {
      show: false
    },
    type: 'radar',
    height: 350
  },

  plotOptions: {
    bar: {
      horizontal: true,
    }
  },

  dataLabels: {
    enabled: false
  },

  fill: {
    colors: ['#f05562']
  },

  stroke: {
    show: false
  },

  markers: {
    colors: ['#f05562'],
    size: 2
  },

  xaxis: {
    categories: ['Ground Speed', 'Air Speed', 'Water Speed', 'Anti-Gravity Speed', 'Acceleration', 'Weight', 'Ground Handling', 'Air Handling', 'Water Handling', 'Anti-Gravity Handling', 'On-Road Traction', 'Off-Road Traction', 'Mini Turbo'
    ],
  },

  yaxis: {
    tickAmount: 6,
    min: 0,
    max: 6
  }
};

export const chart = new ApexCharts(document.getElementById('stat-chart'), options);
chart.render();

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

const data = {
      labels: [
        'Front-End',
        'Figma',
        'Web Design',
        'JAVA',
        'HTML',
        'SQL',
        'Game Development'
      ],
      datasets: [
        {
          label: 'SKILLS',
          data: [50, 69, 60, 34, 67, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Açık mavi yarı saydam
          borderColor: 'rgb(54, 162, 235)', // Açık mavi
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
      ]
    };

    const config = {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(54, 162, 235, 0.3)' // Açık mavi eksen çizgileri
            },
            grid: {
              color: 'rgba(54, 162, 235, 0.2)' // Açık mavi grid çizgileri
            },
            pointLabels: {
              color: '#a9d6e5', // Açık mavi etiketler
              font: {
                size: 14,
                family: "'Playfair Display', serif"
              }
            },
            ticks: {
              beginAtZero: true,
              max: 100,
              stepSize: 20,
              color: '#87cefa',
              backdropColor: 'transparent',
              font: {
                size: 12,
                family: "Arial, sans-serif"
              }
            }
          }
        },
        plugins: {
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            titleFont: {
              family: "'Playfair Display', serif",
              size: 16
            },
            bodyFont: {
              family: "Arial, sans-serif",
              size: 14
            },
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.r + ' / 100';
              }
            }
          },
          legend: {
            labels: {
              color: '#a9d6e5',
              font: {
                family: "'Playfair Display', serif",
                size: 16
              }
            }
          }
        }
      }
    };

    window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('radarChart').getContext('2d');
  new Chart(ctx, config);
});
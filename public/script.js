
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/sales')
      .then(response => response.json())
      .then(data => {
        const months = data.map(item => item.month);
        const sales = data.map(item => item.sales);
  
        const ctx = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: months,
            datasets: [{
              label: 'Sales',
              data: sales,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
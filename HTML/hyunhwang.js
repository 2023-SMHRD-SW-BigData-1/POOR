var ctx = document.getElementById('stack_chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    
      labels: ['게시글', '댓글', '좋아요', '팔로우', '팔로워', '절약 현황'],
  datasets: [
    {
      barThickness: 17,
      label: '지난 달',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
                '#e5537e',
                '#e5537e',
                '#e5537e',
                '#e5537e',
                '#e5537e',
                '#e5537e'
            ],
    },
    {
      barThickness: 17,
      label: '이번 달(+)',
      data: [5, 12, 13, 11, 12, 31],
      backgroundColor: [
                '#f3bacc',
                '#f3bacc',
                '#f3bacc',
                '#f3bacc',
                '#f3bacc',
                '#f3bacc'
            ],
    }
  ]
      
      
    },
    options: {
    plugins: {      
      tooltip: {
        reverse: true,
      },
      title: {
        display: false,
        text: '앱 서비스 전체현황'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
                   display: false,
                   drawBorder: false
                }
      },
      y: {
        stacked: true,
        display: false
      }
    }
  }
       
});


  
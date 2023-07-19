import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: '이번달 수치',
          data: [
            {
              x: '게시글 수',
              y: 8,
              goals: [
                {
                  name: '이전달 수치',
                  value: 5,
                  strokeHeight: 5,
                  strokeColor: '#E91E63'
                }
              ]
            },
            {
                x: '댓글 수',
                y: 36,
                goals: [
                  {
                    name: '이전달 수치',
                    value: 28,
                    strokeHeight: 5,
                    strokeColor: '#E91E63'
                  }
                ]
              },
              {
                x: '좋아요 수',
                y: 162,
                goals: [
                  {
                    name: '이전달 수치',
                    value: 132,
                    strokeHeight: 5,
                    strokeColor: '#E91E63'
                  }
                ]
              },
              {
                x: '절약수치',
                y: 68,
                goals: [
                  {
                    name: '이전달 수치',
                    value: 54,
                    strokeHeight: 5,
                    strokeColor: '#E91E63'
                  }
                ]
              },
              // {
              //   x: '2015',
              //   y: 8133,
              //   goals: [
              //     {
              //       name: '이전달 수치',
              //       value: 6600,
              //       strokeHeight: 13,
              //       strokeWidth: 0,
              //       strokeLineCap: 'round',
              //       strokeColor: '#775DD0'
              //     }
              //   ]
              // },
              // {
              //   x: '2016',
              //   y: 7132,
              //   goals: [
              //     {
              //       name: '이전달 수치',
              //       value: 7500,
              //       strokeHeight: 5,
              //       strokeColor: '#775DD0'
              //     }
              //   ]
              // },
              // {
              //   x: '2017',
              //   y: 7332,
              //   goals: [
              //     {
              //       name: '이전달 수치',
              //       value: 8700,
              //       strokeHeight: 5,
              //       strokeColor: '#775DD0'
              //     }
              //   ]
              // },
              // {
              //   x: '2018',
              //   y: 6553,
              //   goals: [
              //     {
              //       name: '이전달 수치',
              //       value: 7300,
              //       strokeHeight: 2,
              //       strokeDashArray: 2,
              //       strokeColor: '#775DD0'
              //     }
              //   ]
              // }
          ]
        }
      ],
      chart: {
        width : 700,
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#66BB6A'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['이번달 수치', '이전달 수치'],
        markers: {
          fillColors: ['#66BB6A', '#E91E63']
        }
      }
    };

    const chartMain = new ApexCharts(chartRef.current, options);
    chartMain.render();

    return () => {
      chartMain.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef} />;
}

export default ChartComponent;
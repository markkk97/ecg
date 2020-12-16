
//HR CHART
var ctx = document.getElementById('hr_cam_off');

var hr_cam = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'],
        datasets: [{
            label: 'Heart Rate',
            data: [65,95],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Optimal Max HR value range',
            data: [100,100],
            
            borderColor: [
                'rgba(0, 82, 22, 1)',
                 //'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],

            // Changes this dataset to become a line
            type: 'line',
            fill:false
        },{
            label: 'Optimal Min HR value range',
            data: [60,60],
            borderColor: [
                'rgba(0, 230, 61, 1)',
                 //'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],

            // Changes this dataset to become a line
            type: 'line',
            fill:false
        } ]
    },
    options: {
        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                display: true,
                labelString: 'HR in bpm'
                }
            }]
        }
    }
});


//HRV CHART
var ctx2 = document.getElementById('hrv_cam_off');

var hrv_cam = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'],
        datasets: [{
            label: 'Heart Rate Variability',
            data: [77, 48],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Optimal Max HRV value range',
            data: [80,80],
            borderColor: [
                'rgba(0, 82, 22, 1)',
                 //'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],

            // Changes this dataset to become a line
            type: 'line',
            fill:false
        },{
            label: 'Optimal Min HRV value range',
            data: [60,60],
            borderColor: [
                'rgba(0, 230, 61, 1)',
                 //'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],

            // Changes this dataset to become a line
            type: 'line',
            fill:false
        }
    ]
    },
    options: {
        scales: {
            
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'HRV in ms'
                }
            }]
        }
    }
});

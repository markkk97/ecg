//evolution over time of hr and hrv
window.onload = function() {

var ctx = document.getElementById('evolution_hr');

var moments = ['Before presentation',2,3,4,5,"During presnetation",2,3,4,5,6,7,8,9,10,"Ideal HR",2,3,4,5];
var config = {
		type: 'line',
		data: {
				labels: moments,
				datasets: [
					{
					label: 'Participant 1',
					borderColor: '#007bff',
					data: [78,71.96,82.19,77.49,72.73,79.25,70,72.73,75,77.92,68.96,68.18,67.42,65.79,67.57,68.96,70.31,70.31,70.31,69.77,65.33,64.10,62.39,61.89,61.01,61.55,60.47,59.87,59.63,58.85],
					fill: false,
				 },
				 {
					label: 'Participant 4',
					borderColor: '#00d5ff',
					data: [86.97,84.09,83.52,82.27,84.14,  82.30,84.57,86.19,85.23,82.79,83.17,82.52,84.31,84.06,85.27  ,83.05,88.33,85.38,84.52,81.93,84.19,85.84],
					fill: false,
				 },
				 
				]
				
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Comparison of HR over time with audience camera ON'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'time period'
						}
					}],
					yAxes: [{
						display: true,
						ticks: {
							max : 130,    
							min : 60
							},
						scaleLabel: {
							display: true,
							labelString: 'HR in bpm'
						}
					}]
				}
			}
        };
			
	window.myLine = new Chart(ctx, config);
	

var ctxhroff = document.getElementById('evolution_hr_off');

var moments = ['Before presentation',2,3,4,5,"During presnetation",2,3,4,5,6,7,8,9,10,"Ideal HR",2,3,4,5];
var config = {
		type: 'line',
		data: {
			labels: moments,
				datasets: [ 
				{
					label: 'Participant 2',
					borderColor: '#FE5D5D',
					data: [87.80,94.73,78.26,81.81,93.50,   87.80,97.30,102.86,90.00,85.71,98.63,88.88,94.73,85.71,97.67,	82.35,86.75,80.77,75.00,90.00],
					fill: false,
				 },
				 {
					label: 'Participant 3',
					borderColor: '#c70000',
					data: [97.45,106.09,106.37,106.03,95.97,    86.76,80.18,77.09,76.83,77.46,78.88,80.51,78.86,76.36,77.55,    71.29,73.14,72.87,75.92,74.56],
					fill: false,
				 },

				 
				]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Comparison of HR over time with audience camera OFF'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'time period'
						}
					}],
					yAxes: [{
						display: true,
						ticks: {
							max : 130,    
							min : 60
							},
						scaleLabel: {
							display: true,
							labelString: 'HR in bpm'
						}
					}]
				}
			}
        };
			
    window.myLine = new Chart(ctxhroff, config);
    

        
var ctxhroff = document.getElementById('evolution_hrv_off');

var moments2 = ['Before presentation', 'During presentation', 'Resting HR value'];
var config2 = {
		type: 'line',
		data: {
				labels: ['Before presentation', 'During presentation', 'Resting HR value'],
				datasets: [{
					label: 'Audience with camera ON',
					borderColor: 'rgb(255, 99, 132)',
					data: [70,90,60],
					fill: false,
				}, {
					label: 'Audience with camera OFF',
					fill: false,
					borderColor: 'rgb(0,0,205)',
					data: [77,99,66],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Comparison of HRV over time in both scenarios (Camera ON/OFF)'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'HRV in ms'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'time period'
						}
					}]
				}
			}
        };
        
        window.myLine = new Chart(ctx2, config2);
		
};
//evolution over time of hr and hrv
window.onload = function() {

var ctx = document.getElementById('evolution_hr');

var moments = ['Before presentation 1',2,3,4,5,"During presnetation 1",2,3,4,5,6,7,8,9,10," ","Ideal HRV 1",2,3,4,5];
var config = {
		type: 'line',
		data: {
				labels: moments,
				datasets: [
					{
					label: 'Participant 1',
					borderColor: '#007bff',
					data: [6,8,5,6,6,  31,32,9,9,14,20,14,14,20,20, ,20,26,26,24,31],
					//data: [78,71.96,82.19,77.49,72.73,79.25,70,72.73,75,77.92,68.96,68.18,67.42,65.79,67.57,68.96,70.31,70.31,70.31,69.77,65.33,64.10,62.39,61.89,61.01,61.55,60.47,59.87,59.63,58.85],
					fill: false,
				 },
				 {
					label: 'Participant 4',
					borderColor: '#00d5ff',
					data: [20,23,34,33,28,    34,25,25,28,34,34,40,34,35,30,  ,47,58,58,61,53],
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
							max : 100,    
							min : 0
							},
						scaleLabel: {
							display: true,
							labelString: 'HRV in ms'
						}
					}]
				}
			}
        };
			
	window.myLine = new Chart(ctx, config);
	

var ctxhroff = document.getElementById('evolution_hr_off');

var moments = ['Before presentation 1',2,3,4,5,"During presnetation 1",2,3,4,5,6,7,8,9,10," ","Ideal HRV 1",1,2,3,4,5];
var config = {
		type: 'line',
		data: {
			labels: moments,
				datasets: [ 
				{
					label: 'Participant 2',
					borderColor: '#FE5D5D',
					data:[84,63,82,89,55,  58,55,55,59,64,71,77,71,77,63, , 58,70,84,82,82],
			//data: [87.80,94.73,78.26,81.81,93.50,   87.80,97.30,102.86,90.00,85.71,98.63,88.88,94.73,85.71,97.67,	82.35,86.75,80.77,75.00,90.00],
					fill: false,
				 },
				 {
					label: 'Participant 3',
					borderColor: '#c70000',
					data:[81,84,80,85,87,  71,67,71,79,78,71,60,68,63,70, ,93,92,90,83,85],
					//data: [97.45,106.09,106.37,106.03,95.97,    86.76,80.18,77.09,76.83,77.46,78.88,80.51,78.86,76.36,77.55,    71.29,73.14,72.87,75.92,74.56],
					fill: false,
				 },

				 
				]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Comparison of HRV over time with audience camera OFF'
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
							max : 100,    
							min : 0
							},
						scaleLabel: {
							display: true,
							labelString: 'HRV in ms'
						}
					}]
				}
			}
        };
			
    window.myLine = new Chart(ctxhroff, config);
    
	
};
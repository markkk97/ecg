
//HR CHART
var ctx = document.getElementById('hr_cam');
hr_dad_on = 68.76;
hr_paul_off = 92.93;
hr_clara_off = 79.21;
hr_stefan_on = 84.04;

back_blue_on =  'rgba(54, 162, 235, 0.2)';
back_red_off =  'rgba(255, 0, 60, 0.2)';
back_g_off = 'rgba(0, 156, 18,0.2)';


border_blue_on =  'rgba(54, 162, 235, 1)';
border_red_off =  'rgba(255, 0, 60, 1)';
border_g_off = 'rgba(0, 156, 18,1)';






var hr_cam = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['P1', 'P2','P3', 'P4' ],
        datasets: [
            {
            label: [''],
            data: [hr_dad_on,hr_paul_off,hr_clara_off,hr_stefan_on,], //dad (on) - paul (off) - stefan (on) - clara(off)
            backgroundColor: [
                back_blue_on,
                back_red_off,  
                back_red_off,
                back_blue_on

                
                                                 
            ],
            borderColor:[ 
                border_blue_on,
                border_red_off,
                border_red_off,
                border_blue_on,
               
              
            ]   ,         
               
            borderWidth: 1
        },
        {
            label: 'Optimal Max HR value range',
            data: [79,79,79,79],
            
            borderColor: 
                'rgba(0, 82, 22, 1)',        
            // Changes this dataset to become a line
            type: 'line',
            fill:false
        },{
            label: 'Optimal Min HR value range',
            data: [59,59,59,59],
            borderColor: 
                'rgba(0, 230, 61, 1)',               
            // Changes this dataset to become a line
            type: 'line',
            fill:false
        } 
    ]
    },
    options: {
        responsive: true,
        scales: {
        
            yAxes: [{
                ticks: {
                 max : 100,    
                 min : 40
                 },
                scaleLabel: {
                    display: true,
                    labelString: 'HR in bpm'
                    }
            }]
        },
        title: {
            display: true,
            text: 'Average HR during the presentation'
        }
    }
});

hrv_dad_on_before = 6;
hrv_dad_on = 18;
ideal_hrv_dad_on= 32;

hrv_paul_off_before = 74;
hrv_paul_off = 65;
ideal_hrv_paul_off= 67;

hrv_clara_off_before = 76;
hrv_clara_off = 70;
ideal_hrv_clara_off = 89;

hrv_stefan_on_before = 28;
hrv_stefan_on = 32;
ideal_hrv_stefan_off = 55;




//HRV CHART
var ctx2 = document.getElementById('hrv_cam');

var hrv_cam = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['P1 - Audience camera ON', 'P2 - Audience camera OFF','P3 - - Audience camera OFF', 'P4 -- Audience camera ON' ],
        datasets: [
            {
            label: ['HRV avg Before the presentation'],
            data: [hrv_dad_on_before,
                hrv_paul_off_before,
                hrv_clara_off_before,
                hrv_stefan_on_before], //dad (on) - paul (off) - stefan (on) - clara(off)
            
                backgroundColor:  back_blue_on,
            borderColor: border_blue_on,                                  
            borderWidth: 1
        },

        {
            label: ['HRV avg During the presentation'],
            data: [hrv_dad_on,
                hrv_paul_off,
                hrv_clara_off,
                hrv_stefan_on], //dad (on) - paul (off) - stefan (on) - clara(off)
            
            backgroundColor: back_red_off,  
            borderColor: border_red_off,                        
            borderWidth: 1
        }  ,

        {
            label: ['Ideal HRV avg  '],
            data: [ideal_hrv_dad_on,
                ideal_hrv_paul_off,
                ideal_hrv_clara_off,
                ideal_hrv_stefan_off], //dad (on) - paul (off) - stefan (on) - clara(off)
            
            backgroundColor: back_g_off,  
            borderColor: border_g_off,                        
            borderWidth: 1
        }  
    ]
    },
    options: {
        scales: {
        
            yAxes: [{
                ticks: {
                 max : 100,    
                 min : 1
                 },
                scaleLabel: {
                    display: true,
                    labelString: 'HRV in ms'
                    }
            }]
        },
        title: {
            display: true,
            text: 'Average HRV of participants in the different time periods'
        }
    }
});

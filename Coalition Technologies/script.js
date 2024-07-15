
const tok = 'Y29hbGl0aW9uOnNraWxscy10ZXN0';
const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';


fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + tok
    
    }
})
    .then(response => response.json())
    .then(datas => {
        // Handle the response data here
        console.log(datas);
        var loo = document.getElementById('loop-data');
        for (const element of datas) {
            console.log(element); 
            loo.innerHTML += '<li class="list-group-item d-flex justify-content-between align-items-start" id="' +element.name+'" style="border: none;" > ' +
            '<div class="ms-2 me-auto icon-link" style="padding: 15px 0px;">'+
            '<img src="'+ element.profile_picture +'"  alt="User" width="auto" height="48" style="padding-right: 5px;">'+
            '<div style="display: block;">'+
            '<div class="fw-bold" style="color: #072635;">'+ element.name +'</div>'+
            '<div class="fw-normal" style="color: #707070;">'+ element.gender +','+  element.age +'</div>'+
            '</div>'+
            '</div>'+
            '<a class="badge" style="background-color: none;">'+
            '<img src="images/more_vert_FILL0_wght300_GRAD0_opsz24.svg"  alt="Options" width="auto" height="20" style="margin-top:30px; padding-right: 10px; transform: rotate(90deg);">'+
            '</a>' +
            '</li>';
          }
        var loo2 = document.getElementById('loop-data-diag');
        var loo3 = document.getElementById('loop-data-lab');
        var profinfo = document.getElementById('profileinfo');
        for (const element of datas) {
            if (element.name == 'Jessica Taylor'){
                // console.log(element.diagnostic_list.length);
                for (let i = 0; i < element.diagnostic_list.length; ++i){
                    
                    loo2.innerHTML += 
                    '<div class="row " style="border-bottom: 1px solid #F6F7F8; padding:10px 0px;">'+
                    '<div class="col-4" style="align-content:center;">'+
                    '<a class=" text-start" style="color: #072635; border: none; font-size:14px; text-decoration: none; ">'+ element.diagnostic_list[i].name +'</a>'+
                    '</div>'+
                    '<div class="col-6" style="align-content:center;" >'+
                    '<a class="text-start" style="color: #072635; border: none; font-size:14px; text-decoration: none;">'+ element.diagnostic_list[i].description+'</a>'+
                    '</div>'+
                    '<div class="col-2" style="align-content:center;">'+
                    '<a class="text-start" style="color: #072635; border: none; font-size:14px; text-decoration: none;">'+ element.diagnostic_list[i].status+'</a>'+
                    '</div>'+
                    '</div>'
                    }
                    for (let i = 0; i < element.lab_results.length; ++i){
                    loo3.innerHTML +='<div class="row " style="border-bottom: 1px solid #F6F7F8; padding:8px 0px;">'+
                    '<div class="col-9" style="align-content:center;">'+
                    '<a class=" text-start" style="color: #072635; border: none; font-size:14px; text-decoration: none; ">'+ element.lab_results[i] +'</a>'+
                    '</div>'+
                    '<div class="col-3" style="align-content:center;">'+
                    '<img src="images/download_FILL0_wght300_GRAD0_opsz24.svg"  alt="Options" width="auto" height="20" style=" padding-right: 10px;">'+
                    '</div>'+
                    '</div>'
                    }
                    
                    profinfo.innerHTML +='<div class="row p-3" >'+
                    '<div class="col-12" style="align-content:center; text-align-last:center">'+
                    '<img src="'+element.profile_picture+'"  alt="Options" width="auto" height="200" style="margin-bottom: 32px;" >'+
                    '</div>'+
                    '<div class="col-12" style="">'+
                    //birth
                    '<div class="ms-2 me-auto icon-link" style="padding: 15px 0px;">'+
                    '<img src="images/BirthIcon.svg"  alt="User" width="auto" height="42" style="padding-right: 5px;">'+
                    '<div style="display: block;">'+
                    '<div class="fw-normal" style="color: #072635; font-size:14px;">Date of Birth</div>'+
                    '<div class="fw-bold" style="color: #072635; font-size:14px;">'+ element.date_of_birth +'</div>'+
                    '</div>'+
                    '</div> <br>'+
                    //gender
                    '<div class="ms-2 me-auto icon-link" style="padding: 15px 0px;">'+
                    '<img src="images/FemaleIcon.svg"  alt="User" width="auto" height="42" style="padding-right: 5px;">'+
                    '<div style="display: block;">'+
                    '<div class="fw-normal" style="color: #072635; font-size:14px;">Gender</div>'+
                    '<div class="fw-bold" style="color: #072635; font-size:14px;">'+ element.gender +'</div>'+
                    '</div>'+
                    '</div> <br>'+
                    //contact info
                    '<div class="ms-2 me-auto icon-link" style="padding: 15px 0px;">'+
                    '<img src="images/PhoneIcon.svg"  alt="User" width="auto" height="42" style="padding-right: 5px;">'+
                    '<div style="display: block;">'+
                    '<div class="fw-normal" style="color: #072635; font-size:14px;">Contact Info.</div>'+
                    '<div class="fw-bold" style="color: #072635; font-size:14px;">'+ element.phone_number +'</div>'+
                    '</div>'+
                    '</div>'+
                    //emergency contact
                    '<div class="ms-2 me-auto icon-link" style="padding: 15px 0px;">'+
                    '<img src="images/PhoneIcon.svg"  alt="User" width="auto" height="42" style="padding-right: 5px;">'+
                    '<div style="display: block;">'+
                    '<div class="fw-normal" style="color: #072635; font-size:14px;">Emergency Contacts</div>'+
                    '<div class="fw-bold" style="color: #072635; font-size:14px;">'+ element.emergency_contact +'</div>'+
                    '</div>'+
                    '</div>'+
                    // Insurance Provider
                    '<div class="ms-2 me-auto icon-link" style="padding: 15px 0px;">'+
                    '<img src="images/InsuranceIcon.svg"  alt="User" width="auto" height="42" style="padding-right: 5px;">'+
                    '<div style="display: block;">'+
                    '<div class="fw-normal" style="color: #072635; font-size:14px;">Insurance Provider</div>'+
                    '<div class="fw-bold" style="color: #072635; font-size:14px;">'+ element.insurance_type +'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="col-12" style="align-content:center; text-align-last:center; padding-top: 30px;">'+
                    '<button class="btn active" type="button" style="text-font:14px; padding:11px 40px !important;">'+
                    'Show All Information'+
                     '</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
            }
          }

          var active = document.getElementById('Jessica Taylor');
          active.setAttribute('class', 'list-group-item d-flex active justify-content-between align-items-start');
          active.setAttribute('style', 'background-color: #D8FCF7; border: none;');  
      
          const ctx = document.getElementById('myChart');
          const blodSys = document.getElementById('blodSys');
          const blodDias = document.getElementById('blodDias');
          const pressureSys = document.getElementById('pressureSys');
          const pressureDias = document.getElementById('pressureDias');
          const respRate = document.getElementById('respRate');
          const temps = document.getElementById('temps');
          const heartRate = document.getElementById('heartRate');
          const respRateLevel = document.getElementById('respRateLevel');
          const tempsLevel = document.getElementById('tempsLevel');
          const heartRateLevel = document.getElementById('heartRateLevel');
          //const DATA_COUNT = ["Oct. 2023", "Nov. 2023", "Dec. 2023", "Jan. 2024", "Feb. 2024", "Mar. 2024"];
          const labels = ["Oct. 2023", "Nov. 2023", "Dec. 2023", "Jan. 2024", "Feb. 2024", "Mar. 2024"];
          
            var diastolic = [];
            var systolic = [];
            for (const element of datas){
                if (element.name == 'Jessica Taylor'){
                    for (let i = 5; i > -1; --i){
                    diastolic.push(element.diagnosis_history[i].blood_pressure.diastolic.value)
                    systolic.push(element.diagnosis_history[i].blood_pressure.systolic.value)
                    // console.log(element.diagnosis_history[i].blood_pressure.diastolic.value)
                    blodSysdata= element.diagnosis_history[i].blood_pressure.systolic.value;
                    blodDiasdata= element.diagnosis_history[i].blood_pressure.diastolic.value;
                    pressureSysdata= element.diagnosis_history[i].blood_pressure.systolic.levels;
                    pressureDiasdata= element.diagnosis_history[i].blood_pressure.diastolic.levels;

                    respRatedata= element.diagnosis_history[i].respiratory_rate.value;
                    tempsdata= element.diagnosis_history[i].temperature.value;
                    heartRatedata= element.diagnosis_history[i].heart_rate.value;
                    respRateLeveldata= element.diagnosis_history[i].respiratory_rate.levels;
                    tempsLeveldata= element.diagnosis_history[i].temperature.levels;
                    heartRateLeveldata= element.diagnosis_history[i].heart_rate.levels;
                    }
                }
            }
            
            blodSys.innerHTML +=blodSysdata
            blodDias.innerHTML +=blodDiasdata
            pressureSys.innerHTML +=pressureSysdata
            pressureDias.innerHTML +=pressureDiasdata

            respRate.innerHTML +=respRatedata
            temps.innerHTML +=tempsdata
            heartRate.innerHTML +=heartRatedata
            respRateLevel.innerHTML +=respRateLeveldata
            tempsLevel.innerHTML +=tempsLeveldata
            heartRateLevel.innerHTML +=heartRateLeveldata

                 const data  = {
                        labels: labels,
                        datasets: [
                          {
                            label: 'Diastolic',
                            data: diastolic,
                            borderColor: '#E66FD2',
                            fill: false,
                            tension: 0.4
                          }, {
                            label: 'Systolic',
                            data: systolic,
                            borderColor: '#8C6FE6',
                            fill: false,
                            tension: 0.4
                          }
                        ]
                      };   
                
          
      
          new Chart(ctx, {
              type: 'line',
              data: data,
              options: {
                  responsive: true,
                  plugins: {
                      legend: {
                                display: false
                            }
                    },
                  interaction: {
                  intersect: false,
                  },
                  scales: {
                  x: {
                      display: true,
                      title: {
                      display: true
                      },
                      grid: {
                        display: false
                      }
                  },
                  y: {
                      display: true,
                      suggestedMin: 60,
                      suggestedMax: 180
                  }
                  }
              }
          });     



    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });



    




  
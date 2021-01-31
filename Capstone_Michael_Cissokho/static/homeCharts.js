// Our labels along the x-axis
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
// For drawing the lines
let africa = [86,114,106,106,107,111,133,221,783,2478];
let asia = [282,350,411,502,635,809,947,1402,3700,5267];
let europe = [168,170,178,190,203,276,408,547,675,734];

function renderHomeChart(){
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          { 
            data: africa,
            label: "Dow Jones Industrial Average",
            borderColor: "#3e95cd",
            fill: false
          },
          { 
            data: asia,
            label: "SP500",
            borderColor: "#8e5ea2",
            fill: false
          },
          { 
            data: europe,
            label: "Nasdaq",
            borderColor: "#3cba9f",
            fill: false
          },
        ]
      },
      maintainAspectRatio: true
    });
}

renderHomeChart()

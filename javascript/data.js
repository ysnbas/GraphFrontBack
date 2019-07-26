let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
var hot = document.getElementById('sicaklik').innerHTML
var plus = document.getElementById('arti').innerHTML

if (hot > 50) {
    document.getElementById('uyari').style.background = "#cb0909cf";
    document.getElementById('uyari').style.color = "white";
    document.getElementById('uyari').style.width = "50%";
    document.getElementById('uyari').style.height = "8%";
    document.getElementById('uyari').style.fontSize = "19px";
    document.getElementById('uyari').style.textAlign = "center";
    document.getElementById('uyari').style.marginLeft = "225px";
    document.getElementById('uyari').style.borderRadius = "9px";
    document.getElementById('uyari').innerHTML = " Sıcaklık Çok Fazla Yangın Çıkabilir Lütfen 50 Derece Altına İndirin!!! (KAPATMAK İÇİN DOKUNUN.)";

    var color1 = document.getElementById('sicaklik').style = "red"

}
else if (hot < 50) {
    var color1 = document.getElementById('sicaklik').style = "rgba(54, 162, 235, 0.6)"

}

document.getElementById('uyari').addEventListener("click", close);

function close() {
    document.getElementById('uyari').style = "display:none;"
}
let massPopChart = new Chart(myChart, {

    type: 'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Sıcaklık', 'Karbonmonoksit'],

        datasets: [{
            label: 'En Yüksek',
            data: [

                hot,
                plus,
                0
                // document.getElementById('sicaklik').innerHTML,
                // document.getElementById('arti').innerHTML


            ],
            //backgroundColor:'green',

            backgroundColor: [
                color1,
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)'

            ],

            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]


    },
    options: {
        title: {
            display: true,
            text: '...nın Verileri',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

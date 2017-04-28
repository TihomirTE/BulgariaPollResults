import { results } from "./../dependencies/results.js"

function drawActivity() {
    $("#tab-content").html("");
    drawActivityCharts("За 10:00 часа", results().VotingActivity[10], 'ten-o-clock');
    drawActivityCharts("За 13:00 часа", results().VotingActivity[13], 'one-o-clock');
    drawActivityCharts("За 17:00 часа", results().VotingActivity[17], 'five-o-clock');
    drawActivityCharts("За 20:00 часа", results().VotingActivity[20], 'eight-o-clock');
}

function drawActivityCharts(name, data, divName) {

    let div = $("<div></div>")
        .attr("id", divName);
        //.attr("display", "inline-block");
    let divId = "#" + divName;
    $("#tab-content").append(div);

    $(divId).kendoChart({
        title: {
            position: "top",
            text: "Процент гласували за страната"
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            type: "donut",
            startAngle: 90
        },
        series: [{
                name: name,
                data: data,
            }
        ],
        tooltip: {
            visible: true,
            template: "#= category # (#= series.name #): #= value #%"
        }
    });
}

export { drawActivity }
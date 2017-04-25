let mandati = [{
    "blog": "My blog",
    "party": "ПП Герб",
    "value": 95,
    "userColor": "#0000FF"
}, {
    "blog": "My blog",
    "party": "БСП за България",
    "value": 80,
    "userColor": "#FF0000"
}, {
    "blog": "My blog",
    "party": "Обединени Патриоти",
    "value": 27,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "party": "ДПС",
    "value": 26,
    "userColor": "#B200FF"
}, {
    "blog": "My blog",
    "party": "Воля",
    "value": 12,
    "userColor": "#00FFFF"
}];

function createChart() {
    $("#chart").kendoChart({
        dataSource: {
            data: mandati
        },
        title: {
            align: "center",
            text: "Разпределение на мандатите в парламента"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column",
            labels: {
                visible: true,
                background: "transparent"
            }
        },
        series: [{
            field: "value",
            colorField: "userColor"
        }],
        valueAxis: {
            max: 100,
            majorGridLines: {
                visible: false
            },
            visible: false
        },
        categoryAxis: {
            field: "party",
            majorGridLines: {
                visible: false
            },
            line: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);
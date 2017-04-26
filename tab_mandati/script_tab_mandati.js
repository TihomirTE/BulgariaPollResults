import { getPartyColor } from "./../dependencies/PartyColorPicker.js";
import { results } from "./../dependencies/results.js";

function generatorData() {
    let resultsData = results().PartiesResults;

    let arrayData = $.map(resultsData, function(value, index) {
        return [value];
    });
    let finalData = [];
    for (let i = 0; i < 21; i += 1) {
        if (arrayData[i].mandads > 0) {
            let dataObject = {};
            dataObject.name = arrayData[i].name;
            dataObject.mandates = arrayData[i].mandads;
            dataObject.color = getPartyColor(i);

            finalData.push(dataObject);
        }
    }
    return finalData;
}

let finalDataResults = generatorData();

console.log(finalDataResults);

function createChart() {
    $("#tab-content").kendoChart({
        dataSource: {
            data: finalDataResults[0]
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
            field: finalDataResults[0].mandates,
            colorField: finalDataResults[0].color
        }],
        valueAxis: {
            max: 100,
            majorGridLines: {
                visible: false
            },
            visible: false
        },
        categoryAxis: {
            field: finalDataResults[0].name,
            majorGridLines: {
                visible: false
            },
            line: {
                visible: false
            }
        }
    });
}

export { createChart };
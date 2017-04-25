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
    //console.log(finalData);
    return finalData;
}

console.log(generatorData());

function createChart() {
    $("#tab-content").kendoChart({
        dataSource: {
            data: generatorData()
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
            field: generatorData(i).mandates,
            colorField: generatorData(i).color
        }],
        valueAxis: {
            max: 100,
            majorGridLines: {
                visible: false
            },
            visible: false
        },
        categoryAxis: {
            field: generatorData(i).name,
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
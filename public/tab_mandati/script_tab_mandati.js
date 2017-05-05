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
            dataObject.color = getPartyColor(i + 1);

            finalData.push(dataObject);
        }
    }
    return finalData;
}

let finalDataResults = generatorData();

function createChart() {
    $("#tab-content").kendoChart({
        title: {
            align: "center",
            text: "Разпределение на мандатите в парламента"
        },
        dataSource: {
        data: finalDataResults
    },
    series: [{
        field: "mandates",
        name: "Мандати",
        color: "color"
    }],
    categoryAxis: {
        field: "name"
    }
    });
}

export { createChart };
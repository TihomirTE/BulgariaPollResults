import { getPartyColor } from "./../dependencies/PartyColorPicker.js";
import { results } from "./../dependencies/results.js";

function generatorDataMandates() {
    const numberOfParties = 21;
    let resultsData = results().PartiesResults;

    // Convert object to array
    let arrayData = Object.keys(resultsData).map(key => resultsData[key]);

    let finalData = [];
    for (let i = 0; i < numberOfParties; i += 1) {
        if (arrayData[i].mandads > 0) {
            let dataObject = {};
            dataObject.name = arrayData[i].abbreviationName;
            dataObject.mandates = arrayData[i].mandads;
            dataObject.color = getPartyColor(i + 1);

            finalData.push(dataObject);
        }
    }
    return finalData;
}

let finalDataResults = generatorDataMandates();

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
export { generatorDataMandates };
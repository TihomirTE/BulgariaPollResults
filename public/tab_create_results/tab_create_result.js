import { getPartyColor } from "./../dependencies/PartyColorPicker.js";

function generatorData(results) {

    let resultsData = results;
    let parties = [];

    for (let i = 1; i <= Object.keys(resultsData).length; i += 1) {
        if (resultsData[i].result >= 2) {
            let data = {};
            data.category = resultsData[i].name;
            data.value = resultsData[i].result;
            data.color = getPartyColor(i);

            parties.push(data);
        }
    }
    return parties;
}

function createdPollResults(results) {

    $("#tab-content").kendoChart({
        title: {
            position: "top",
            text: "Резултати от парламентарни избори 2017 г."
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: \n #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
            data: results
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });
}

class PartyResult {

    constructor(nameOfParty, numberInBulletin, resultInPercents, mandatsWon) {

        this.Name = nameOfParty;
        this.NumberInBulletin = numberInBulletin;
        this.ResulutInPercent = resultInPercents;
        this.MandatsWon = mandatsWon;
    }

    set Name(nameOfParty) {

        if (typeof(nameOfParty) !== 'string') {
            throw new Error('Name of party passed is not a string');
        }

        if (nameOfParty === '') {
            throw new Error('Name of pary cant be empty string');
        }

        this._name = nameOfParty;
    }

    get Name() {

        return this._name;
    }

    set NumberInBulletin(numberInBulletin) {

        if (typeof(numberInBulletin) !== 'number') {
            throw new Error('Number of bulletin of party passed is not a number');
        }

        if (numberInBulletin < 0) {
            throw new Error('Number of bulletin of party cant be smaller than 0');
        }

        this._numberInBulletin = numberInBulletin;
    }

    get NumberInBulletin() {

        return this._numberInBulletin;
    }

    set ResulutInPercent(resultInPercents) {

        if (typeof(resultInPercents) !== 'number') {
            throw new Error('Result in porcents of party passed is not a number');
        }

        if (resultInPercents < 0) {
            throw new Error('Result in pracents of party cant be smaller than 0');
        }

        this._resultInPercents = resultInPercents;
    }

    get ResulutInPercent() {

        return this._resultInPercents;
    }

    set MandatsWon(mandatsWon) {

        if (typeof(mandatsWon) !== 'number') {
            throw new Error('Mandats won of party passed is not a number');
        }

        if (mandatsWon < 0) {
            throw new Error('Mandats won of party cant be smaller than 0');
        }

        this._mandatsWon = mandatsWon;
    }

    get MandatsWon() {

        return this._mandatsWon;
    }
}

class ElectionResults {

    constructor() {

        this._electionResults = {};
    }

    Add(partyResult) {

        if (partyResult instanceof PartyResult === false) {

            throw new Error('Result passed is not valid!');
        }

        this._electionResults[partyResult.NumberInBulletin] = {};
        this._electionResults[partyResult.NumberInBulletin].name = partyResult.Name;
        this._electionResults[partyResult.NumberInBulletin].number = partyResult.NumberInBulletin;
        this._electionResults[partyResult.NumberInBulletin].result = partyResult.ResulutInPercent;
        this._electionResults[partyResult.NumberInBulletin].mandads = partyResult.MandatsWon;
    }

    GetResults() {

        return this._electionResults;
    }
}

function create() {

    let electionResults = new ElectionResults();

    let tab = $('#tab-content');

    let description = $('<p>').text('Моля попълнете данните за всяка от партиите участвали в изборите, една по една и накрая герерирайте вашата графика');

    let partyName = $('<form>').html(`Име на партия:<br>
<input type="text" id="partyname" name="partyname"><br>
Номер в бюлетината: (* Въвейждайте резултатите в правилна последователност -> 1, 2, 3...)<br>
<input type="text" id="number" name="number"><br>
Резултат в проценти: (* Само резултати с над 2% ще се визуализират)<br>
<input type="text" id="procents" name="procents"><br>
Спечелени мандати:<br>
<input type="text" id="mandates" name="mandates"><br>
<br>
<input type="button" value="Въведи резултат "id="submit">
<br>
<br>
<input type="button" value="Генерирай графика" id="generate">`);


    tab.append(description).append(partyName);
}

export { create, PartyResult, ElectionResults, generatorData, createdPollResults }
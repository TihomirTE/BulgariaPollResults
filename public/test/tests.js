// Run the tests: mocha --require ./test/testHelper.js


// Import chai.
let expect = require('chai').expect;
let path = require('path');

let fs = require('fs');
let vm = require('vm');

function jQuery(doc) {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const { window } = new JSDOM();
    const JQ = require("jquery")(window);
}
let $ = jQuery;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);

// before(() => {
//     $ = require('jquery');
//     global.$ = $;
// });

// Import the desired thing to be tested
let tabsResults = require(path.join(__dirname, '..', 'tab_rezultati/script_tab_rezultati'));
//let mandates = require(path.join(__dirname, '..', 'tab_mandati/script_tab_mandati'));

// Tests
describe('Tests', function() {
    describe("Tests Results from the poll", () => {
        let generatorData = tabsResults.generatorData;
        it("Function return array", () => {
            expect(generatorData()).to.be.instanceof(Array);
        });
        it("Show parties above 2%", () => {
            expect(generatorData()).to.have.length.within(8, 10);
        });

    });


    describe("Tests Mandates", () => {
        it("Sth", () => {

            let dataMandates = mandates.generatorDataMandates;
            expect(dataMandates()).to.be.instanceof(Function);
        });

    });
});
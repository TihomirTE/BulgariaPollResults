// Run the tests: mocha --require ./test/testHelper.js

var assert = require('assert');

// Import chai.
var expect = require('chai').expect;
var path = require('path');


// var $;
// before(() => {
//     $ = require('jquery');
//     global.$ = $;
// });

// Import the desired thing to be tested
let tabsResults = require(path.join(__dirname, '..', 'tab_rezultati/script_tab_rezultati'));

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
});
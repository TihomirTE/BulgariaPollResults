// Run the tests: npm test or mocha --require ./test/testHelper.js

// Import chai.
let expect = require('chai').expect;
let path = require('path');
let sinon = require('sinon');

function jQuery(doc) {
    const jsdom = require('jsdom');
    const { JSDOM } = jsdom;
    const { window } = new JSDOM();
    const JQ = require('jquery')(window);
}
let $ = jQuery;

// Import the desired files to be tested
let tabsResults = require(path.join(__dirname, '..', 'tab_rezultati/script_tab_rezultati'));
let mandates = require(path.join(__dirname, '..', 'tab_mandati/script_tab_mandati'));
let customResults = require(path.join(__dirname, '..', 'tab_create_results/tab_create_result'));


// Tests
describe('Tests', function() {
    describe('Tests Results from the poll', () => {
        let generatorData = tabsResults.generatorData;

        it("Function generator Data should return array", () => {
            expect(generatorData()).to.be.instanceof(Array);
        });
        it("Show parties above 2%", () => {
            expect(generatorData()).to.have.length.within(8, 10);
        });
    });

    describe("Tests Mandates", () => {
        let dataMandates = mandates.generatorDataMandates;

        it("Function generatorDataMandates should return Array", () => {
            expect(dataMandates()).to.be.instanceof(Array);
        });
        it("Number of parties in Parliament", () => {
            expect(dataMandates()).to.have.length.within(4, 6);
        });
    });

    describe("Tests User custom input", () => {
        let partyResult = customResults.PartyResult;

        it("Check constructor of class PartyResult", () => {
            expect(customResults).to.be.instanceof(constructor);
        });
        it("class PartyResult exist", () => {
            expect(partyResult).to.exist;
        });

        describe("PartyResult class", () => {
            it("Name of party passed is not a string", () => {
                expect(() => partyResult(0, 2, 34, 40)).to.throw();
            });
            it("Name of pary cant be empty string", () => {
                expect(() => partyResult("", 2, 34, 40)).to.throw();
            });
            it("Number of bulletin of party passed is not a number", () => {
                expect(() => partyResult("Pobeda", "not a number", 34, 40)).to.throw();
            });
            it("Number of bulletin of party can't be smaller than 0", () => {
                expect(() => partyResult("Pobeda", -1, 34, 40)).to.throw();
            });
            it("Result in percent of party passed is not a number", () => {
                expect(() => partyResult("Pobeda", 5, "not a number", 40)).to.throw();
            });
            it("Result in percent of party cant be smaller than 0", () => {
                expect(() => partyResult("Pobeda", 5, -1, 40)).to.throw();
            });
            it("Mandats won of party passed is not a number", () => {
                expect(() => partyResult("Pobeda", 5, 10, "not a number")).to.throw();
            });
            it("Mandats won of party cant be smaller than 0", () => {
                expect(() => partyResult("Pobeda", 5, 10, -1)).to.throw();
            });

            it('expect PartyResult object to have valid properties', function() {
                let result = new partyResult("Pobeda", 5, 10, 15);
                expect(result.Name).to.equal("Pobeda");
                expect(result.NumberInBulletin).to.equal(5);
                expect(result.ResulutInPercent).to.equal(10);
                expect(result.MandatsWon).to.equal(15);
            });
        });

        describe("ElectionResult class", () => {
            let electionResults = customResults.ElectionResults;
            let result = new electionResults();

            it("ElectionResults constructor should return object", () => {
                expect(result).to.be.a("object");
            });
            it("ElectionResults class to have function Add()", () => {
                expect(result.Add).to.be.a("function");
            });
            it("ElectionResults class to have function GetResults()", () => {
                expect(result.GetResults).to.be.a("function");
            });
            it("Function GetResults() return ElectionResult object", () => {
                expect(result.GetResults()).to.be.a("object");
            });

            let stubPartyResult = sinon.createStubInstance(partyResult);
            it("Function Add() not throw exception when parameter is PartyResult instance", () => {
                expect(() => result.Add(stubPartyResult)).to.not.throw();
            });
            it("Function Add() throw exception if parameter is not PartyResult instance", () => {
                expect(() => result.Add("sth")).to.throw();
            });
        });
    });
});
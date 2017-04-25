import { createMap } from './tab_karta/script_tab_karta.js';
import { createChart } from './tab_mandati/script_tab_mandati.js'
import { pollResults } from './tab_rezultati/script_tab_rezultati.js'

console.log(createChart())

let app = $.sammy(function() {

  this.get('#/map', function() {
    $('#tab-content').text(createMap());
  });

  this.get('#/mandates', function() {
    $('#tab-content').text(createChart());
  });

  this.get('#/percents', function() {
    $('#tab-content').text(pollResults());
  });

});

$(function() {
  app.run();
});
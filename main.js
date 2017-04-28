import { createMap } from './tab_karta/script_tab_karta.js';
import { createChart } from './tab_mandati/script_tab_mandati.js'
import { pollResults } from './tab_rezultati/script_tab_rezultati.js'
import { drawActivity } from './tab_aktivnost/script_tab_aktivnost.js'

let $divContainer = $("#tab-content");

$divContainer.width(700);
$divContainer.height(500);

let app = $.sammy(function() {

  this.get('#/map', function() {
    $('#tab-content').html(createMap());
  });

  this.get('#/mandates', function() {
    $('#tab-content').text(createChart());
  });

  this.get('#/percents', function() {
    $('#tab-content').text(pollResults());
  });

  this.get('#/activity', function () {
      $('#tab-content').text(drawActivity())
  })
});

$(function() {
  app.run();
});
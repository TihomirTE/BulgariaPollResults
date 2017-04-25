import { createMap } from './tab_karta/script_tab_karta.js';

$.sammy(function() {

  this.get('#/map', function() {
      console.log('proba')
    $('#tab-content').text('Welcome!');
  });

});
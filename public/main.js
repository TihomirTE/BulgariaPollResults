import { createMap } from './js/tabs/script_tab_karta.js';
import { createChart } from './js/tabs/script_tab_mandati.js';
import { pollResults } from './js/tabs/script_tab_rezultati.js';
import { drawActivity } from './js/tabs/script_tab_aktivnost.js';
import { create, PartyResult, ElectionResults, generatorData, createdPollResults } from './js/tabs/tab_create_result.js';
import { showLogin, showRegister } from 'js/user-controller.js';

let $divContainer = $('#tab-content');

$divContainer.width(700);
$divContainer.height(500);

let app = $.sammy(function() {

    this.before('#*', function() {
        let fav = localStorage['favorite'];
        if (fav && !sessionStorage['firstVisit']) {
            sessionStorage['firstVisit'] = true;
            this.redirect(fav);
        }
    });

    this.get('/', function() {
        $('#tab-content').text(drawActivity());
    });

    this.get('#/map', function() {
        $('#tab-content').html(createMap());
    });

    this.get('#/mandates', function() {
        $('#tab-content').text(createChart());
    });

    this.get('#/percents', function() {
        $('#tab-content').text(pollResults());
    });

    this.get('#/activity', function() {
        $('#tab-content').text(drawActivity());
    });

    this.get('#/create', function() {

        let electionResults = new ElectionResults();
        $('#tab-content').text('');
        $('#tab-content').text(create());

        let button = $('#submit');
        let name = $("#partyname");
        let number = $('#number');
        let procents = $('#procents');
        let mandates = $('#mandates');

        button.on("click", function() {

            let newResult = new PartyResult(name.val(), Number(number.val()), Number(procents.val()), Number(mandates.val()));

            name.val('');
            number.val('');
            procents.val('');
            mandates.val('');

            electionResults.Add(newResult);
        });

        let generateButton = $('#generate');

        generateButton.on("click", function() {

            let results = generatorData(electionResults.GetResults());

            $('#tab-content').text(createdPollResults(results));

        });
    });

    this.get('#/login', function() {
        if ($('#login-anch').text() === 'Вход') {
            showLogin('#tab-content');
        } else {
            firebase.auth().signOut()
                .then(function() {
                    $('#login-anch').text('Вход');
                    showLogin('#tab-content');
                    toastr.success('Излязохте от системата успешно!');
                })
                .catch(function(error) {
                    toastr.error('Възника грешка, моля опитайте отново!');
                });
        }
    });

    this.get('#/register', function() {
        showRegister('#tab-content');
    });

    this.notFound = function() {
        $('#tab-content').text(createChart());
    };
});

$(function() {
    app.run();
});
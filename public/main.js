import { createMap } from './tab_karta/script_tab_karta.js';
import { createChart } from './tab_mandati/script_tab_mandati.js'
import { pollResults } from './tab_rezultati/script_tab_rezultati.js'
import { drawActivity } from './tab_aktivnost/script_tab_aktivnost.js'
import { create, PartyResult, ElectionResults, generatorData, createdPollResults } from './tab_create_results/tab_create_result.js'

let $divContainer = $("#tab-content");

$divContainer.width(700);
$divContainer.height(500);

let app = $.sammy(function() {

    this.before('#*', function() {
        let userId = localStorage['favorite'];
        if(userId && !sessionStorage['firstVisit']) {
          sessionStorage['firstVisit'] = true;
          this.redirect(userId);
        }
    });

    this.get('/', function () {
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

    this.get('#/activity', function () {
      $('#tab-content').text(drawActivity());
  });

    this.get('#/create', function () {
      
      let electionResults = new ElectionResults();
      $('#tab-content').text('');
      $('#tab-content').text(create());

      let button = $('#submit');
      let name = $("#partyname");
      let number = $('#number');
      let procents = $('#procents');
      let mandates = $('#mandates');

      button.on("click", function(){
    
        let newResult = new PartyResult(name.val(), Number(number.val()), Number(procents.val()), Number(mandates.val()));

        name.val('');
        number.val('');
        procents.val('');
        mandates.val('');
        
        electionResults.Add(newResult);
});

      let generateButton = $('#generate');

      generateButton.on("click", function(){

        let results = generatorData(electionResults.GetResults());

        $('#tab-content').text(createdPollResults(results));

    })
  });

    //TESTING
    this.get ('#/login', function () {
        if($('#login-anch').text() === 'Вход'){
            showLogin('#tab-content');
        }else{
            firebase.auth().signOut()
                .then(function() {
                    $('#login-anch').text('Вход');
                    showLogin('#tab-content');
                    toastr.success('Излязохте от системата успешно!');
            })
                .catch(function (error) {
                    toastr.error('Възника грешка, моля опитайте отново!');
                })
        }
    });

    this.get('#/register', function () {
        showRegister('#tab-content');

        $('#register-button').on('click', () => {
            console.log('test');
        });
    });

  this.notFound = function() {
    $('#tab-content').text(createChart());
  };
});

//TODO MOVE IN CONTROLLER??
function showLogin(selector) {
    $.get('templates/login.html', function(templ) {
        $(selector).html(templ);
        $('#login-button').on('click', () => {
            let userName = $('#tb-username-log').val();
            let passWord = $('#tb-password-log').val();

            firebase.auth().signInWithEmailAndPassword(userName, passWord)
                .then(() => {
                    $('#login-anch').text('Изход');
                    let user = firebase.auth().currentUser;

                    toastr.success('Здравейте ' + userName);
                    if(user.hasOwnProperty('favorite')){
                        if(user['favorite'] === '#/map'){
                            location.hash = '#/map';
                        } else if(user['favorite'] === '#/mandates') {
                            location.hash = '#/mandates';
                        }else if(user['favorite'] === '#/percents'){
                            location.hash = '#/percents';
                        } else if(user['favorite'] === '#/create'){
                            location.hash = '#/create';
                        }
                        else{
                            location.hash = '#/activity';
                        }
                    } else{
                        location.hash = '#/map';
                    }
                })
                .catch(function(error) {
                    toastr.error('Грешно потребителско име или парола!');
            });
        })
    });
}

function showRegister(selector) {
    $.get('templates/register.html', function (tmpl) {
        $(selector).html(tmpl);
        $('#register-button').on('click', () => {
            let userName = $('#tb-username-reg').val();
            let passWord = $('#tb-password-reg').val();
            let passWord2 = $('#tb-password2').val();

            if(passWord !== passWord2){
                toastr.error('Паролите трябва да бъдат еднакви!');
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(userName, passWord)
                .then(() => {
                    $('#login-anch').text('Изход');
                    location.hash = '#/map';
                    toastr.success('Успешно се регистрирахте в системата ' + userName + '!');
            })
                .catch(function(error) {
                    toastr.error('Моля въведете валиден e-mail и парола поне 6 символа!');
            });
        });
    })
}

//end of TODO

$(function() {
  app.run();
});
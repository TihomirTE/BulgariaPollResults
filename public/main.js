import { createMap } from './tab_karta/script_tab_karta.js';
import { createChart } from './tab_mandati/script_tab_mandati.js'
import { pollResults } from './tab_rezultati/script_tab_rezultati.js'
import { drawActivity } from './tab_aktivnost/script_tab_aktivnost.js'

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

    //TESTING
    this.get ('#/login', function () {
        showLogin('#tab-content');
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
                    let user = firebase.auth().currentUser;
                    console.log(user);
                    console.log(user['favorite']);
                    toastr.success('Здравейте ' + userName);
                    if(user.hasOwnProperty('favorite')){
                        if(user['favorite'] === '#/map'){
                            $('#tab-content').html(createMap());
                        } else if(user['favorite'] === '#/mandates') {
                            $('#tab-content').text(createChart());
                        }else if(user['favorite'] === '#/percents'){
                            $('#tab-content').text(pollResults());
                        } else{
                            $('#tab-content').text(drawActivity());
                        }
                    } else{
                        $('#tab-content').text(createMap());
                    }
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
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
                console.log('here');
                $('#tab-content').text(createMap());
                console.log(toastr);
                toastr.success('Добре дошъл ' + userName);
            })
                .catch(function(error) {
                // Handle Errors here.
                toastr.error('Моля въведете валиден e-mail и парола поне 6 символа!');
                let errorCode = error.code;
                let errorMessage = error.message;

            });
        });
    })
}

//end of TODO

$(function() {
  app.run();
});
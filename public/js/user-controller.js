$('#favorite-button').on('click', () => {
    toastr.info('Успешно избрахте любима страница!');
    let user = firebase.auth().currentUser;

    firebase.database().ref('users/' + user.uid).set({
        userId: user.uid,
        favorite: location.hash,
    });

    if (user) {
        user['favorite'] = location.hash;

    } else {
        localStorage['favorite'] = location.hash;
    }
});

function showLogin(selector) {
    $.get('templates/login.html', function(templ) {
        $(selector).html(templ);
        $('#login-button').on('click', () => {
            let userName = $('#tb-username-log').val();
            let passWord = $('#tb-password-log').val();

            firebase.auth().signInWithEmailAndPassword(userName, passWord)
                .then(() => {
                    $('#login-anch').text('Изход');
                    toastr.success('Здравейте ' + userName);
                    let uid = firebase.auth().currentUser.uid;
                    let userRef = firebase.database().ref('users/' + uid);

                    userRef.on('value', function(snapshot) {
                        location.hash = snapshot.val()['favorite'];
                    });
                })
                .catch(function(error) {
                    toastr.error('Грешно потребителско име или парола!');
                });
        });
    });
}

function showRegister(selector) {
    $.get('templates/register.html', function(tmpl) {
        $(selector).html(tmpl);
        $('#register-button').on('click', () => {
            let userName = $('#tb-username-reg').val();
            let passWord = $('#tb-password-reg').val();
            let passWord2 = $('#tb-password2').val();

            if (passWord !== passWord2) {
                toastr.error('Паролите трябва да бъдат еднакви!');
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(userName, passWord)
                .then(() => {
                    $('#login-anch').text('Изход');
                    location.hash = '#/map';
                    toastr.success('Успешно се регистрирахте в системата ' + userName + '!');

                    let userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('users/' + userId).set({
                        userId: userId,
                        favorite: '#/map',
                    });

                })
                .catch(function(error) {
                    toastr.error('Моля въведете валиден e-mail и парола поне 6 символа!');
                });
        });
    });
}

export { showLogin, showRegister };
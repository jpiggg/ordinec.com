$(document).ready(function () {
    var user = $('#username');
    var password = $('#password');

    $('#signup').click(function (e) {
        e.preventDefault();
        if (user.val() == ''){
            user.removeAttr('placeholder');
            user.css('background', 'url(img/input.png) no-repeat');
            user.addClass('red');
            user.val('Логин')
        }
        if (password.val() == ''){
            password.removeAttr('placeholder');
            password.css('background', 'url(img/valid-2.png) no-repeat');
            password.attr('type', 'text');
            password.addClass('red');
            password.val('Пароль')
        }

        user.focus(function () {
            var self = $(this);
            self.removeClass('red');
            self.val('');
            self.removeAttr('placeholder');
            self.css('background', 'url(img/input-left.png) no-repeat');
        });
        password.focus(function () {
            var self = $(this);
            self.removeClass('red');
            self.val('');
            self.removeAttr('placeholder');
            self.attr('type', 'password');
            self.css('background', 'url(img/input-2.png) no-repeat');
        });
    });
});
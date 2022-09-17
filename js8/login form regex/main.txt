function login(userName, password) {
    if (userName.match(/.+\@.+\..+/) && password.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)) {
        msg = 'welcome'
    } else if (!userName.match(/.+\@.+\..+/)) {
        msg = 'Enter a valid email.'
    } else if (!password.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)) {
        msg = 'password must have a minimum of 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.'
    }

    document.getElementById("msg").innerHTML = `${msg}`;

}

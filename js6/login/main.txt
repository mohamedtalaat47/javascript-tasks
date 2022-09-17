function login(userName, password) {
    if (userName == 'admin' && password == '123') {
        msg = 'welcome'
    } else {
        msg = 'Wrong username or password, please try again'
    }

    document.getElementById("msg").innerHTML = `${msg}`;

}


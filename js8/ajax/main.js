const url = 'https://reqres.in/api/users?page=2';

fetch(url)
    .then((response) => response.json())
    .then((result) => showUsers(result));

function showUsers(users) {
    users.data.forEach(user => {
        let htmlUser = `<div class="user">
            <img src="${user.avatar}" >
            <h2>${user.first_name} ${user.last_name}</h2>
            <h3>${user.email}</h3>
        </div>`;
        document.getElementById('data').innerHTML += htmlUser;

    });
}
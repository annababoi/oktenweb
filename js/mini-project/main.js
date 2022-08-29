fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => users.forEach(user => {

        let wrap = document.getElementsByClassName("wrap")[0];

        let userDiv = document.createElement('div');
        userDiv.classList.add('common_list_style');
        userDiv.classList.add('users');
        userDiv.innerHTML = userListTemplate(user);
        wrap.appendChild(userDiv);
    }));

function userListTemplate(user) {
    return `<h2 class = user_title>${user.name} - ${user.id}</h2>
            <a href="user-details.html?id=${user.id}"class="btn btn_details">Details</a>`
}

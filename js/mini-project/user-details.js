let url = new URL(location.href);
let id = url.searchParams.get('id');
let wrap = document.getElementsByClassName('wrap')[0];

function getPosts(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(resp => resp.json())
        .then(posts => {
            let postsTitle = document.getElementsByClassName('post_title')[0];
            postsTitle.style.display = 'block';
            postsTitle.style.display = 'flex';
            postsTitle.style.alignSelf = 'center';
            let userInfo = document.getElementsByClassName('user_info')[0];
            userInfo.classList.add('common_list_style');


            let postWrap = document.getElementsByClassName('wrap__posts')[0];
            for (const post of posts) {
                postWrap.innerHTML += userPostsTemplate(post);
                userInfo.appendChild(postWrap);
            }
        })
        .then(() => {
                let postButton = document.getElementsByClassName('btn_load_post')[0];
                postButton.style.display = 'none';
            }
        )

}

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(user => {
        let divInfo = document.createElement('div');
        divInfo.classList.add('user_info');
        divInfo.classList.add('common_list_style');
        divInfo.innerHTML = generateUserDetailsTemplate(user);

        wrap.append(divInfo);
    })

function generateUserDetailsTemplate(user) {
    return `<h2 class="user_title">${user.name} ${user.username} - ${user.id}</h2>
                <p><b>E-mail:</b> <a href="mailto:${user.email}">${user.email}</a></p>
                <p><b>Address:</b> ${user.address.street} Str., ${user.address.suite}, ${user.address.city},
                ${user.address.zipcode}, geo ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> <a href="">${user.website}</a></p>
                <p><b>Company:</b> ${user.company.name}</p> 
                <p><b>Catch phrase:</b> ${user.company.catchPhrase}</p>
                <p> <b>Bs:</b> ${user.company.bs}</p>
                <h3 class="post_title">Posts</h3>
                <button onclick="getPosts(${user.id})"  class="btn btn_load_post">Load posts</button>
                <div class="wrap__posts"></div>
                
                `
}

function userPostsTemplate(post) {
    return ` <div class="post_wrap  ">
                <p class="list">${post.title}<p>
                <a href="post-details.html?id=${post.id}" class="btn btn_post_details">Post details</a>
             </div>`

}


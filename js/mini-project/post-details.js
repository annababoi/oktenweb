let url = new URL(location.href);
let id = url.searchParams.get('id');
let wrapComments = document.getElementsByClassName('wrap_comments')[0];
let wrapDetails = document.getElementsByClassName('wrap_post')[0];
let wrap = document.getElementsByClassName('wrap')[0];
const responseLink = "https://jsonplaceholder.typicode.com/posts/"
fetch(`${responseLink}${id}`)
    .then(resp => resp.json())
    .then(post => {
        let postDiv = document.createElement('div');
        postDiv.innerHTML = postDetailsTemplate(post);
        postDiv.classList.add('post');
        postDiv.classList.add('common_list_style');

        wrapDetails.appendChild(postDiv);
    }).then(() => {
    fetch(`${responseLink}${id}/comments`)
        .then(resp => resp.json())
        .then(comments => {
            let comTitle = document.createElement('h2');
            comTitle.innerHTML = 'Comments of current post:'
            comTitle.classList.add('com_title');
            for (const comment of comments) {
                let commentDiv = document.createElement('div');
                commentDiv.innerHTML = commentsOfPostTemplate(comment);
                commentDiv.classList.add('comment');
                commentDiv.classList.add('common_list_style');
                wrapComments.append(commentDiv);
                wrap.append(wrapDetails, comTitle, wrapComments);
            }
        })
})

function postDetailsTemplate(post) {
    return ` <h2>${post.title}</h2>
             <h3>user ID : ${post.userId}, post ID: ${post.id}</h3>
             <p>${post.body}</p>`

}

function commentsOfPostTemplate(comment) {
    return `<h3>${comment.name}</h3>
           <p>${comment.body}</p>`
}
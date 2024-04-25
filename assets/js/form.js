const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');


let posts = JSON.parse(localStorage.getItem('posts')) || [];

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

function storePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const post = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    if (post.username === '') {
        displayMessage('error', 'Username cannot be blank');
        return false;
    } else if (post.title === '') {
        displayMessage('error', 'Title cannot be blank');
        return false;
    } else if (post.content === '') {
        displayMessage('error', 'Content cannot be blank');
        return false;
    } else {
        displayMessage('success', 'Registered successfully');

    }
    posts.push(post);
    storePosts();
    window.location.href = "blog.html"
});
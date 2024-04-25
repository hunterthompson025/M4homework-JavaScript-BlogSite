const postDiv = document.querySelector('#posts');
const backButton = document.querySelector('#back');

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "index.html"
});

function renderPosts() {

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const article = document.createElement('article');
        article.textContent = "";
        article.setAttribute('data-index', i);
        article.setAttribute('style', 'border: 1px solid black; margin-left:10px')

        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        h2.setAttribute('data-index', i);
        h2.setAttribute('style', 'font-size: 20px; text-decoration: underline')

        const p = document.createElement('p');
        p.textContent = post.content;
        p.setAttribute('data-index', i);
        p.setAttribute('style', 'font-size: 18px;')

        const h3 = document.createElement('h3');
        h3.textContent = (`Author: ${post.username}`);
        h3.setAttribute('data-index', i);
        h3.setAttribute('style', 'font-size: 16px;')

        postDiv.appendChild(article);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(h3);

    }
}


// This function is being called below and will run when the page loads.
function init() {
    // Get stored posts from localStorage
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    // If posts were retrieved from localStorage, update the posts array to it
    if (storedPosts !== null) {
        posts = storedPosts;
    }

    // This is a helper function that will render posts to the DOM
    renderPosts();

}

init();

document.addEventListener("DOMContentLoaded", function() {
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById("posts");
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
                postContainer.appendChild(postElement);
            });
        });
});

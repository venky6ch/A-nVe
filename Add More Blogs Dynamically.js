document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = "Load More";
    loadMoreButton.style.display = "block";
    loadMoreButton.style.margin = "20px auto";
    loadMoreButton.style.padding = "10px 20px";
    loadMoreButton.style.backgroundColor = "#6e8efb";
    loadMoreButton.style.color = "#fff";
    loadMoreButton.style.border = "none";
    loadMoreButton.style.borderRadius = "8px";
    loadMoreButton.style.cursor = "pointer";
    loadMoreButton.style.fontSize = "1em";
    loadMoreButton.style.fontWeight = "bold";
    loadMoreButton.style.transition = "background-color 0.3s ease";
    loadMoreButton.addEventListener('mouseover', function() {
        loadMoreButton.style.backgroundColor = "#a777e3";
    });
    loadMoreButton.addEventListener('mouseout', function() {
        loadMoreButton.style.backgroundColor = "#6e8efb";
    });

    document.body.appendChild(loadMoreButton);

    loadMoreButton.addEventListener("click", function() {
        const newPost = `
        <div class="post">
            <img src="https://via.placeholder.com/800x400" alt="Blog Image">
            <div class="post-content">
                <h2>New Blog Post Title</h2>
                <p class="meta">Posted on August 20, 2024 by Author</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo at libero
                    sollicitudin consequat...
                </p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>`;
        document.querySelector('.blog-container').innerHTML += newPost;
    });
});

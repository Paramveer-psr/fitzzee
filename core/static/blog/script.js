document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById('blogContainer');
    const seeMoreBtn = document.getElementById('seeMoreBtn');

    // Function to show more blogs when "See More" button is clicked
    seeMoreBtn.addEventListener('click', function() {
        const hiddenBlogs = blogContainer.querySelectorAll('.blog-box.hidden');
        hiddenBlogs.forEach(blog => {
            blog.classList.remove('hidden');
        });

        // Hide the "See More" button if there are no more hidden blogs
        if (hiddenBlogs.length === 0) {
            seeMoreBtn.style.display = 'none';
        }
    });
});

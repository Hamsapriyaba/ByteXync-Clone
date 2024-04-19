document.addEventListener("DOMContentLoaded", function() {
    // Show the image after 2 seconds
    setTimeout(function() {
        document.querySelector('.image-container').style.display = 'block';
        // Open another HTML page after 2 seconds
        setTimeout(function() {
            window.location.href = 'index1.html'; // Replace 'another-page.html' with the URL of the page you want to open
        }, 1000);
    }, 1000);
}
)

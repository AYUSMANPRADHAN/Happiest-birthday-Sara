// Music Function
function playMusic() {
    document.getElementById("music").play();
    alert("Once Again Happy Birthday 🎉😊");
}

// Go to Gallery
function goGallery() {
    window.location.href = "gallery.html";
}

// Slideshow Images
let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;

function next() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById("slide").src = images[index];
}

function prev() {
    index--;
    if (index < 0) index = images.length - 1;
    document.getElementById("slide").src = images[index];
}

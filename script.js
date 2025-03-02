const photos = [
  "images/1.jfif", 
  "images/2.jfif", 
  "images/3.jfif", 
  "images/4.jfif", 
  "images/5.jfif", 
  "images/6.jfif", 
  "images/7.jfif", 
  "images/8.jfif"
];
let currentPhotoIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    if (showProgressMessage) {
        document.getElementById("progress-message").classList.remove("hidden");
        document.getElementById("letter-content").classList.add("hidden");
    }
});

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    document.getElementById("photo").src = photos[currentPhotoIndex];
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    document.getElementById("photo").src = photos[currentPhotoIndex];
}

function goToNextPage() {
    window.location.href = 'next.html';
}

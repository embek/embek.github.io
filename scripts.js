let currentImages = [];
let currentImageIndex = 0;

function openGallery(images) {
    currentImages = images;
    currentImageIndex = 0;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = currentImages[currentImageIndex];
    updateNavigationButtons();
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    document.getElementById('modalImage').src = currentImages[currentImageIndex];
    updateNavigationButtons();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    document.getElementById('modalImage').src = currentImages[currentImageIndex];
    updateNavigationButtons();
}

function updateNavigationButtons() {
    document.getElementById('imageCount').textContent = `${currentImageIndex + 1}/${currentImages.length}`;
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
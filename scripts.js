let currentImages = [];
let currentImageIndex = 0;

function openGallery(images) {
    currentImages = images;
    currentImageIndex = 0;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const imageCount = document.getElementById('imageCount');
    
    modal.style.display = 'block';
    modalImg.src = images[0];
    imageCount.textContent = `1/${images.length}`;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImage();
    }
}

function nextImage() {
    if (currentImageIndex < currentImages.length - 1) {
        currentImageIndex++;
        updateModalImage();
    }
}

function updateModalImage() {
    const modalImg = document.getElementById('modalImage');
    const imageCount = document.getElementById('imageCount');
    
    modalImg.src = currentImages[currentImageIndex];
    imageCount.textContent = `${currentImageIndex + 1}/${currentImages.length}`;
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.getElementById('imageModal').style.display === 'block') {
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeModal();
    }
});
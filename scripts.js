document.addEventListener('DOMContentLoaded', function() {
    let currentImages = [];
    let currentImageIndex = 0;
    const modal = document.getElementById('imageModal');

    window.openGallery = function(images) {
        currentImages = images;
        currentImageIndex = 0;
        modal.style.display = 'flex';
        updateModalImage();
    };

    window.closeModal = () => modal.style.display = 'none';
    window.previousImage = () => currentImageIndex > 0 && updateModalImage(--currentImageIndex);
    window.nextImage = () => currentImageIndex < currentImages.length - 1 && updateModalImage(++currentImageIndex);

    function updateModalImage(index = 0) {
        document.getElementById('modalImage').src = currentImages[currentImageIndex];
        document.getElementById('imageCount').textContent = `${currentImageIndex + 1}/${currentImages.length}`;
    }

    modal.addEventListener('click', e => e.target === modal && closeModal());
    document.addEventListener('keydown', e => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') previousImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeModal();
        }
    });
});
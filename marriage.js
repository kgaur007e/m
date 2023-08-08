// Get the gallery element
const gallery = document.querySelector('.gallery');

// Function to adjust the layout on window resize
function adjustGalleryLayout() {
  const galleryWidth = gallery.clientWidth;
  const galleryHeight = gallery.clientHeight;
  
  // Calculate the aspect ratio of the gallery
  const galleryAspectRatio = galleryWidth / galleryHeight;

  // Define the desired number of columns based on the gallery aspect ratio
  let numColumns = 3; // Default number of columns
  if (galleryAspectRatio < 1) {
    numColumns = 2; // For portrait-oriented gallery
  } else if (galleryAspectRatio > 3) {
    numColumns = 4; // For landscape-oriented gallery
  }

  // Calculate the width of each gallery item based on the number of columns
  const itemWidth = galleryWidth / numColumns;

  // Update the width of each gallery item
  const galleryItems = gallery.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });
}

// Initial adjustment on page load
adjustGalleryLayout();

// Add a listener for window resize events
window.addEventListener('resize', adjustGalleryLayout);

// Lightbox functionality
document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-lightbox')) {
      e.preventDefault();
      const imageUrl = e.target.getAttribute('href');
      const lightbox = createLightbox(imageUrl);
      document.body.appendChild(lightbox);
    } else if (e.target.classList.contains('close-button')) {
      const lightbox = e.target.closest('.lightbox');
      lightbox.remove();
    }
  });
  
  function createLightbox(imageUrl) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
  
    const image = document.createElement('img');
    image.src = imageUrl;
  
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
  
    lightbox.appendChild(image);
    lightbox.appendChild(closeButton);
  
    return lightbox;
  }
  
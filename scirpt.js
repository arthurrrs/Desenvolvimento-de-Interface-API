// script.js
const imageContainer = document.querySelector('.image-container');

async function fetchImages() {
  const response = await fetch('https://api.unsplash.com/photos?client_id=YOUR_ACCESS_KEY');
  const data = await response.json();

  data.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.regular;
    imgElement.alt = image.alt_description;
    imageContainer.appendChild(imgElement);
  });
}

fetchImages();
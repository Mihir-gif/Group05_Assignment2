// select the featured image and the thumbnail images
const featuredImage = document.querySelector('#gallery figure img');
const thumbnailImages = document.querySelectorAll('#gallery ul li img');

// set the featured image to the first image in the list
featuredImage.src = thumbnailImages[0].src.replace('-small.jpg', '-large.jpg');
featuredImage.alt = thumbnailImages[0].alt;
featuredImage.width = 1200;
featuredImage.height = 800;
featuredImage.parentElement.querySelector('figcaption').textContent = thumbnailImages[0].alt;

// user can click on the thumbnail photo 
thumbnailImages.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    // update the featured image with the clicked thumbnail
    featuredImage.src = this.src.replace('-small.jpg', '-large.jpg');
    featuredImage.alt = this.alt;
    featuredImage.parentElement.querySelector('figcaption').textContent = this.alt;
  });
});

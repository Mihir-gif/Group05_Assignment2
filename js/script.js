//Here we select the featured and thumbnail images
const featuredImage = document.querySelector('#gallery figure img');
const thumbnailImages = document.querySelectorAll('#gallery ul li img');

// Here we set the featured image to appear first in the list
featuredImage.src = thumbnailImages[0].src.replace('-small.jpg', '-large.jpg');
featuredImage.alt = thumbnailImages[0].alt;
featuredImage.parentElement.querySelector('figcaption').textContent = thumbnailImages[0].alt;

// Using this function user can select the thumbnail image
thumbnailImages.forEach(thumbnail =>
{
    thumbnail.addEventListener('click', function() 
    {
        // Here we update the featured image with the new click thumbnail image
        featuredImage.src = this.src.replace('-small.jpg', '-large.jpg');
        featuredImage.alt = this.alt;
        featuredImage.parentElement.querySelector('figcaption').textContent = this.alt;
    });
});

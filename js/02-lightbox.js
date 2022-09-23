import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGalleryRef = document.querySelector('.gallery');
const listGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
<<<<<<< HEAD
      /*html*/ ` <a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' > </a> `
=======
      /*html*/ ` <li><a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' title="${description}"> </a></li> `
>>>>>>> 2b51e6844d76c8ffefb457086553b8b328a9e2b2
  )
  .join('');

getGalleryRef.innerHTML = listGalleryMarkup;

new SimpleLightbox('.gallery a ', {
  captionsData: 'alt',
  captionDelay: 250,
});

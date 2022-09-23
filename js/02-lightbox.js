import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGalleryRef = document.querySelector('.gallery');
const listGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      ` <li><a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' title="${description}"> </a></li> `
  )
  .join('');

getGalleryRef.innerHTML = listGalleryMarkup;

new SimpleLightbox('.gallery a ', {
  captionsData: 'alt',
  captionDelay: 250,
});

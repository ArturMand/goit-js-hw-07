import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGalleryRef = document.querySelector('.gallery');
const listGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      /*html*/ ` <a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' title="${original}"> </a> `
  )
  .join('');

getGalleryRef.innerHTML = listGalleryMarkup;

new SimpleLightbox('.gallery a ', {
  captionDelay: 250,
});

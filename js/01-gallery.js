import { galleryItems } from './gallery-items.js';
// Change code below this line

// зарендерить разметку с имейджами з обьекта +
//  повесить слущатель собитий на див галери  +
// при нажатии на фото открьівать модалку с большим фото из обьекта  +
const getGalleryRef = document.querySelector('.gallery');

const listGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class='gallery__item'> <a class='gallery__link' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' data-source="${original}"> </a> </div>`
  )
  .join('');

getGalleryRef.innerHTML = listGalleryMarkup;

getGalleryRef.addEventListener('click', e => {
  e.preventDefault();
  //   checkClickImage(e);

  const isGalleryImage = e.target.nodeName !== 'IMG';
  if (isGalleryImage) {
    return;
  }

  openBigImageWithModal(e);
});

/*

function checkClickImage(e) {
  const isGalleryImage = e.target.nodeName !== 'IMG';
  if (isGalleryImage) {
    return;
  }
}

*/

function openBigImageWithModal(e) {
  const getAttributeSelectedImage = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `<img src="${getAttributeSelectedImage}" width="800" height="600" >`
  );

  instance.show();
  closeBigImageKeyEsc(instance);
}
function closeBigImageKeyEsc(instance) {
  window.addEventListener('keydown', e => {
    const isKeyEscape = e.key === 'Escape';
    if (isKeyEscape) {
      instance.close();
      window.removeEventListener();
    }
  });
}

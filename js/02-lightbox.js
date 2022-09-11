import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

// gallery.addEventListener("click", onGalleryClick);

function createCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
	 <a class="gallery__item" href="${original}">
	 <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join("");
}


new SimpleLightbox('.gallery a', { 
		captionsData: 'alt',
		captionsDelay: 250,
		animationSpeed: 250,
});
	







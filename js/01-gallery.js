import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

gallery.addEventListener("click", onGalleryClick);

function createCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
		<div class="gallery__item">
  			<a class="gallery__link" href="${original}">
    			<img
      			class="gallery__image"
      			src="${preview}"
      			data-source="${original}"
      			alt="${description}"
    			/>
  			</a>
		</div>
		`;
  })
  .join('');
}

let instance;

function onGalleryClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	

	instance = createBasicLightboxInstance(event);

	document.addEventListener("keydown", onEscapeKeyDown);
	
	instance.show();
	
}

function createBasicLightboxInstance(event) {
	return basicLightbox.create(
		`<img src="${event.target.dataset.source}">`
	)
}

function onEscapeKeyDown(event) {
	if (event.key !== 'Escape') return;

	instance.close();
	instance = null;
	document.removeEventListener("keydown", onEscapeKeyDown);
}

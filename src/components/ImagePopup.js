import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_photo ${card.isOpen && "popup_opened"}`}
      aria-label="Секция попапа с фотографией"
    >
      <div className="popup__container-image">
        <button className="popup__close" onClick={onClose}></button>
        <figure className="popup__figure">
          <img
            src={card.element.link}
            alt={card.element.name}
            className="popup__image"
          />
          <figcaption className="popup__caption">
            {card.element.name}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;

import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_photo ${props.card.isOpen && "popup_opened"}`}
      aria-label="Секция попапа с фотографией"
    >
      <div className="popup__container-image">
        <button className="popup__close" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img
            src={`${props.card.element.link}`}
            alt={props.card.element.name}
            className="popup__image"
          />
          <figcaption className="popup__caption">
            {props.card.element.name}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;

import React from "react";

function ImagePopup() {
  return (
    <section
      className="popup popup_photo"
      aria-label="Секция попапа с фотографией"
    >
      <div className="popup__container-image">
        <button className="popup__close"></button>
        <figure className="popup__figure">
          <img src="#" alt="" className="popup__image" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;

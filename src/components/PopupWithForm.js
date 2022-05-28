import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonText = "Сохранить",
}) {
  return (
    <section className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose}></button>
        <form name={`${name}`} className="popup__form" noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;

import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name={"add"}
      isOpen={isOpen}
      title={"Новое место"}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Создать"}
    >
      <fieldset className="popup__info">
        <label htmlFor="title" className="popup__label"></label>
        <input
          type="text"
          className="popup__input popup__input_type_name"
          id="title"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__error" id="title-error"></span>
        <label htmlFor="link" className="popup__label"></label>
        <input
          type="url"
          className="popup__input popup__input_type_description"
          id="link"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__error" id="link-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

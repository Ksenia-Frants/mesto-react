import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"avatar"}
      isOpen={isOpen}
      title={"Обновить аватар"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__info">
        <label htmlFor="link-avatar" className="popup__label"></label>
        <input
          type="url"
          className="popup__input popup__input_type_avatar-link"
          id="link-avatar"
          name="link-avatar"
          placeholder="Ссылка на картинку"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="link-avatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name={"edit"}
        isOpen={isEditProfilePopupOpen}
        title={"Редактировать профиль"}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__info">
            <label htmlFor="name" className="popup__label"></label>
            <input
              type="text"
              className="popup__input popup__input_type_name"
              id="name"
              name="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error" id="name-error"></span>
            <label htmlFor="about" className="popup__label"></label>
            <input
              type="text"
              className="popup__input popup__input_type_description"
              id="about"
              name="about"
              placeholder="О себе"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error" id="about-error"></span>
          </fieldset>
        }
      />
      <PopupWithForm
        name={"add"}
        isOpen={isAddPlacePopupOpen}
        title={"Новое место"}
        onClose={closeAllPopups}
        children={
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
            />
            <span className="popup__error" id="link-error"></span>
          </fieldset>
        }
      />
      <PopupWithForm
        name={"avatar"}
        isOpen={isEditAvatarPopupOpen}
        title={"Обновить аватар"}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__info">
            <label htmlFor="link-avatar" className="popup__label"></label>
            <input
              type="url"
              className="popup__input popup__input_type_avatar-link"
              id="link-avatar"
              name="link-avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="link-avatar-error"></span>
          </fieldset>
        }
      />
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
      <section className="popup popup_delete">
        <div className="popup__container">
          <button className="popup__close"></button>
          <form name="deleteForm" className="popup__form" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              type="submit"
              className="popup__button popup__button_delete"
            >
              Да
            </button>
          </form>
        </div>
      </section>
      <template id="photo-card-template">
        <div className="card">
          <img src="#" alt="" className="card__image" />
          <div className="card__image-description">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button className="card__like"></button>
              <p className="card__like-number">1</p>
            </div>
          </div>
          <button className="card__delete"></button>
        </div>
      </template>
    </div>
  );
}

export default App;

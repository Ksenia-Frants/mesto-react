import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    element: {},
  });
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUser().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard({ ...selectedCard, isOpen: true, element: card });
  };

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
    setSelectedCard({ ...selectedCard, isOpen: false });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={"edit"}
          isOpen={isEditProfilePopupOpen}
          title={"Редактировать профиль"}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>
        <PopupWithForm
          name={"add"}
          isOpen={isAddPlacePopupOpen}
          title={"Новое место"}
          onClose={closeAllPopups}
          buttonText={"Создать"}
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
        </PopupWithForm>

        <PopupWithForm
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          title={"Обновить аватар"}
          onClose={closeAllPopups}
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
            />
            <span className="popup__error" id="link-avatar-error"></span>
          </fieldset>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

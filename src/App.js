import React from "react";
import logo from "./images/logo/Vector.svg";

function App() {
  return (
    <>
      <body className="page">
        <header className="header">
          <img
            src={logo}
            alt="Логотип сайта - Mesto Russia."
            className="logo"
          />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__container">
              <img
                src="<%=require('./images/Avatar.jpg')%>"
                alt="Аватар профиля."
                className="profile__avatar"
              />
              <button className="profile__avatar-button"></button>
              <div className="profile__info">
                <div className="profile__name-container">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button className="profile__edit-button"></button>
                </div>
                <p className="profile__description">Исследователь океана</p>
              </div>
            </div>
            <button className="profile__add-button"></button>
          </section>
          <section className="cards" aria-label="Секция для карточек">
            <ul className="cards__list"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
        <section className="popup popup_edit">
          <div className="popup__container">
            <button className="popup__close"></button>
            <form name="editForm" className="popup__form" novalidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <fieldset className="popup__info">
                <label for="name" className="popup__label"></label>
                <input
                  type="text"
                  className="popup__input popup__input_type_name"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span className="popup__error" id="name-error"></span>
                <label for="about" className="popup__label"></label>
                <input
                  type="text"
                  className="popup__input popup__input_type_description"
                  id="about"
                  name="about"
                  placeholder="О себе"
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span className="popup__error" id="about-error"></span>
              </fieldset>
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </form>
          </div>
        </section>
        <section className="popup popup_add">
          <div className="popup__container">
            <button className="popup__close"></button>
            <form name="addForm" className="popup__form" novalidate>
              <h2 className="popup__title">Новое место</h2>
              <fieldset className="popup__info">
                <label for="title" className="popup__label"></label>
                <input
                  type="text"
                  className="popup__input popup__input_type_name"
                  id="title"
                  name="name"
                  placeholder="Название"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span className="popup__error" id="title-error"></span>
                <label for="link" className="popup__label"></label>
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
              <button type="submit" className="popup__button">
                Создать
              </button>
            </form>
          </div>
        </section>
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
            <form name="deleteForm" className="popup__form" novalidate>
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
        <section className="popup popup_avatar">
          <div className="popup__container">
            <button className="popup__close"></button>
            <form name="avatarForm" className="popup__form" novalidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <fieldset className="popup__info">
                <label for="link-avatar" className="popup__label"></label>
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
              <button type="submit" className="popup__button">
                Сохранить
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
      </body>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
    api
      .getinitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img
            src={userAvatar}
            alt="Аватар профиля."
            className="profile__avatar"
          />
          <button
            className="profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Секция для карточек">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

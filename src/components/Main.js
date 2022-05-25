import React from "react";
import profileAvatar from "../images/Avatar.jpg";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  api
    .getUser()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(err));
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
            onClick={props.onEditAvatar}
          ></button>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards" aria-label="Секция для карточек">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;

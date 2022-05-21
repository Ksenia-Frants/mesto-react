import profileAvatar from "../images/Avatar.jpg";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img
            src={profileAvatar}
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
  );
}

export default Main;

import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__image-description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__like"></button>
          <p className="card__like-number">{card.likes.length}</p>
        </div>
      </div>
      <button className="card__delete"></button>
    </div>
  );
}

export default Card;

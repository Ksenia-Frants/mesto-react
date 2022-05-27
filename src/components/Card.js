import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__image-description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__like"></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="card__delete"></button>
    </div>
  );
}

export default Card;

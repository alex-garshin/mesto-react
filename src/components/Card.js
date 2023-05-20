import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        alt={props.card.name}
        onClick={handleCardClick}
      ></div>
      <div className="card__wrapper">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button
            className="card__like-button"
            type="button"
            aria-label="Нравится"
          ></button>
          <span className="card__likes-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button
        className="card__delete-button"
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
}

export default Card;

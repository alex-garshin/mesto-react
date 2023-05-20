import React from "react";
import userDefaultAvatar from "../images/user-avatar.png";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__card">
          <div className="profile__avatar">
            <div
              className="profile__avatar-img"
              style={{
                backgroundImage: `url(${userAvatar || userDefaultAvatar})`,
              }}
            ></div>
          </div>

          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={props.onEditAvatar}
          />

          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            />
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фото"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="cards content__cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

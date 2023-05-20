import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cardLink, setCardLink] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profilejob, setProfilejob] = useState("");
  const [avatarLink, setAvatarLink] = useState("");

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  const handleChangeCardTitle = (e) => {
    setCardTitle(e.target.value);
  };

  const handleChangeCardLink = (e) => {
    setCardLink(e.target.value);
  };

  const handleChangeProfileName = (e) => {
    setProfileName(e.target.value);
  };

  const handleChangeProfilejob = (e) => {
    setProfilejob(e.target.value);
  };

  const handleChangeAvatarLink = (e) => {
    setAvatarLink(e.target.value);
  };

  return (
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
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__set">
          <input
            className="form__input form__input_type_name"
            type="text"
            name="name"
            id="name"
            placeholder="Название картинки"
            minLength="2"
            maxLength="30"
            value={cardTitle}
            onChange={(e) => handleChangeCardTitle(e)}
            required
          />
          <span id="name-error" className="form__input-error" />

          <input
            className="form__input form__input_type_link"
            type="url"
            name="link"
            id="link"
            placeholder="Ссылка на картинку"
            value={cardLink}
            onChange={(e) => handleChangeCardLink(e)}
            required
          />
          <span id="link-error" className="form__input-error" />

          <button className="form__submit" type="submit">
            Создать
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__set">
          <input
            className="form__input form__input_type_username"
            type="text"
            name="username"
            id="username"
            placeholder="Имя профиля"
            minLength="2"
            maxLength="40"
            value={profileName}
            onChange={(e) => handleChangeProfileName(e)}
            required
          />
          <span id="username-error" className="form__input-error" />

          <input
            className="form__input form__input_type_job"
            type="text"
            name="job"
            id="job"
            placeholder="информация о профиле"
            minLength="2"
            maxLength="200"
            value={profilejob}
            onChange={(e) => handleChangeProfilejob(e)}
            required
          />
          <span id="job-error" className="form__input-error" />

          <button className="form__submit" type="submit">
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__set">
          <input
            className="form__input form__input_type_avatar"
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на картинку аватара"
            value={avatarLink}
            onChange={(e) => handleChangeAvatarLink(e)}
            required
          />
          <span id="avatar-error" className="form__input-error" />
          <button className="form__submit" type="submit">
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="del-card"
        title="Вы уверены?"
        isOpen={false}
        onClose={closeAllPopups}
      >
        <button className="form__submit" type="submit">
          Да
        </button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

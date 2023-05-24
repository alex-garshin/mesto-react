import { useEffect, useState } from "react";

import PopupWithForm from "./PopupWithForm";

function AddCardPopup({ isOpen, onClose, onAddCard, onLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <input
          className="form__input form__input_type_name"
          type="text"
          name="name"
          id="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
          required
        />
        <span id="name-error" className="form__input-error" />

        <input
          className="form__input form__input_type_link"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleLinkChange}
          required
        />
        <span id="link-error" className="form__input-error" />

        <button className="form__submit" type="submit">
          {onLoading ? "Создание..." : "Создать"}
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddCardPopup;

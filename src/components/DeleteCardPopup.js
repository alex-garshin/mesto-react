import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ card, onClose, onConfirm, onLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
  }

  return (
    <PopupWithForm
      name="del-card"
      title="Вы уверены?"
      isOpen={card}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <button className="form__submit" type="submit">
        {onLoading ? "Сохранение..." : "Да"}
      </button>
    </PopupWithForm>
  );
}

export default DeleteCardPopup;

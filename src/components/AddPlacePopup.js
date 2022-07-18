import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="profile-add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <input
        onChange={handleChangeName}
        className="popup__input popup__input_enter_place"
        type="text"
        name="InputPlace"
        id="inputPlace"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span id="inputPlace-error" className="popup__input-error"></span>
      <input
        onChange={handleChangeLink}
        className="popup__input popup__input_enter_link"
        type="url"
        name="InputLink"
        id="inputLink"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="inputLink-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

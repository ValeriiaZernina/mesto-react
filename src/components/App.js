import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarOpenPopup, setIsEditAvatarOpenPopup] = useState(false);
  const [isEditProfileOpenPopup, setIsEditProfileOpenPopup] = useState(false);
  const [isAddPlaceOpenPopup, setIsAddPlaceOpenPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarOpenPopup(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpenPopup(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlaceOpenPopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarOpenPopup(false);
    setIsEditProfileOpenPopup(false);
    setIsAddPlaceOpenPopup(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* всплывающее окно редактирования данных профиля */}
      <PopupWithForm
        title="Редактировать профиль"
        name="profile-edit"
        isOpen={isEditProfileOpenPopup}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="popup__input popup__input_enter_name"
          type="text"
          name="UserName"
          id="userName"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          pattern="[А-ЯЁа-яёA-Za-z -]{1,40}"
          required
        />
        <span id="userName-error" className="popup__input-error"></span>
        <input
          className="popup__input popup__input_enter_data"
          type="text"
          name="UserAbout"
          id="userAbout"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="userAbout-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/* всплывающее окно добавления картинки */}
      <PopupWithForm
        title="Новое место"
        name="profile-add"
        isOpen={isAddPlaceOpenPopup}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
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
          className="popup__input popup__input_enter_link"
          type="url"
          name="InputLink"
          id="inputLink"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="inputLink-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/* всплывающее окно обновления аватара пользователя  */}
      <PopupWithForm
        title="Обновить аватар"
        name="avatar-update"
        isOpen={isEditAvatarOpenPopup}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="popup__input popup__input_enter_link"
          type="url"
          name="AvatarLink"
          id="avatarLink"
          placeholder="Ссылка на картинку аватара"
          required
        />
        <span id="avatarLink-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/* всплывающее окно удаления картинки */}
      <PopupWithForm
        title="Вы уверены?"
        name="image-delete"
        onClose={closeAllPopups}
        buttonText="Да"
      ></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

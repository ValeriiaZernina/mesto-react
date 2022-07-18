import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

function App() {
  const [isEditAvatarOpenPopup, setIsEditAvatarOpenPopup] = useState(false);
  const [isEditProfileOpenPopup, setIsEditProfileOpenPopup] = useState(false);
  const [isAddPlaceOpenPopup, setIsAddPlaceOpenPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => alert(err));

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => alert(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarOpenPopup(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpenPopup(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlaceOpenPopup(true);
  }

  function closeAllPopups() {
    setIsEditAvatarOpenPopup(false);
    setIsEditProfileOpenPopup(false);
    setIsAddPlaceOpenPopup(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => alert(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => alert(err));
  }

  function handleUpdateUser({ name, about }) {
    api
      .patchUser(name, about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => alert(err));
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .patchAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => alert(err));
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        {/* всплывающее окно редактирования данных профиля */}
        <EditProfilePopup
          isOpen={isEditProfileOpenPopup}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>

        {/* всплывающее окно добавления картинки */}
        <AddPlacePopup
          title="Новое место"
          name="profile-add"
          isOpen={isAddPlaceOpenPopup}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText="Создать"
        ></AddPlacePopup>

        {/* всплывающее окно обновления аватара пользователя  */}
        <EditAvatarPopup
          title="Обновить аватар"
          name="avatar-update"
          isOpen={isEditAvatarOpenPopup}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText="Сохранить"
        ></EditAvatarPopup>

        {/* всплывающее окно удаления картинки */}
        <PopupWithForm
          title="Вы уверены?"
          name="image-delete"
          onCardDelete={handleCardDelete}
          onClose={closeAllPopups}
          buttonText="Да"
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;

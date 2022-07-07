import { api } from "../utils/Api.js";
import { useState, useEffect } from "react";
import Card from "./Card.js";

function Main(props) {
    const [userAvatar, setUserAvatar] = useState('');
    const [userName, setUserName] = useState('');
    const [userDescription, setuserDescription] = useState('');
    const [cards, setCards] = useState([]);

useEffect(() => {
 api.getInitialUser()
 .then((data) => {
    setUserName(data.name);
    setuserDescription(data.about);
    setUserAvatar(data.avatar);
  })
  .catch((err) => alert(err));

  api.getInitialCards()
  .then((cards) => {
      setCards(cards);
  })
  .catch((err) => alert(err))
}, []);

return (
<main className="content">
            <section className="profile">
                <div className="profile__update-photo" onClick={props.onEditAvatar}>
                <img className="profile__avatar" src={userAvatar} alt="аватар"/>
            </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Edit"
                        title="Редактировать данные"></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Add" title="Добавить данные"></button>
            </section>

            <section className="elements">
                <ul className="elements__cards">
                    {cards.map((card) => (
                        <Card
                        card={card} key={card._id} onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
        );
}

export default Main;
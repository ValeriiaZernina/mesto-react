import React from "react";
import avatar from "../images/AvatarUpdate.svg";

function Main({
  onEditProfile,
  onAddData,
  cards,
}) {
    return (
<main className="content">
            <section className="profile">
                <div className="profile__update-photo">
                <img src={avatar} className="profile__avatar" alt="фото путешественника"/>
            </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Edit"
                        title="Редактировать данные"></button>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button className="profile__add-button" onClick={onAddData} type="button" aria-label="Add" title="Добавить данные"></button>
            </section>

            <section className="elements" aria-label="Section label">
                <ul className="elements__cards">
                </ul>
            </section>
        </main>
        );
}

export default Main;
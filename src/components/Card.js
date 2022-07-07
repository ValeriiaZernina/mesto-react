function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__card">
      <button
        type="button"
        className="elements__trash-icon"
        aria-label="Trash"
        title="Удалить"
      ></button>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="elements__description">
        <h2 className="elements__location">{card.name}</h2>
        <button
          type="button"
          className="elements__btn"
          aria-label="Like"
          title="Нравится"
        ></button>
        <h2 className="elements__counter">{card.likes.length}</h2>
      </div>
    </li>
  );
}

export default Card;

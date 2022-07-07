function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button
          type="button"
          className="popup__btn-close"
          aria-label="Закрыть форму"
          onClick={onClose}
        ></button>
        <form className="popup__form" name={name} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

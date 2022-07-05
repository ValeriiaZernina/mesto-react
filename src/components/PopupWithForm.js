function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
    <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="button" className={`popup__btn-close`}></button>
        <form className="popup__form" name={`${props.name}-form`} id="popupEditForm" action="#" method="get" noValidate>
        <button type="submit" className="popup__btn-save popup__btn-save_disabled" title="Сохранить">Сохранить</button>
        </form>
    </div>
</div>
  );
}

export default PopupWithForm;
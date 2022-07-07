const buttonOpenPopupElement = document.querySelector('.profile__add-button');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupUpdateAvatar = document.querySelector('.profile__update-photo');

const CONFIG = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_disabled',
    errorClass: '.popup__input-error',
    inputErrorClass: 'popup__input_type-error'
}

export { CONFIG, buttonOpenPopupElement, buttonOpenPopupProfile, buttonOpenPopupUpdateAvatar};
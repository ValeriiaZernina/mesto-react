import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image-view" aria-label="Попап с фотографией">
    <div className="popup__container popup__container_image">
        <button type="button" className="popup__btn-close" title="Закрыть картинку"></button>
        <img className="popup__pic" src="#" alt="/" />
        <div className="popup__name-place"></div>
    </div>
</div>
  );
}

export default ImagePopup;
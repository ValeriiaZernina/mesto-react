import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import '../App.css';

function App() {

  return (
    <div className="page">
    <Header />
    <Main/>
    <Footer/>
    <PopupWithForm title="Редактировать профиль" name="profile">
    <input 
      className="popup__input popup__input_enter_name"
      type="text"
      name="UserName"
      value=""
      id="userName"
      placeholder="Имя"
      minLength="2"
      maxLength="40"
      pattern="[А-ЯЁа-яёA-Za-z -]{1,40}"
      required/>
    <span
    id="userName-error"
    className="popup__input-error"></span>
    <input className="popup__input popup__input_enter_data" type="text" name="UserAbout" value="" id="userAbout"
    placeholder="О себе" minLength="2" maxLength="200" required/>
    <span id="userAbout-error" className="popup__input-error"></span>
    </PopupWithForm> 
    <ImagePopup/>
    </div>
  );

}

export default App;

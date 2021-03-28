import React, {useState} from  'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
    enableEscKey();
  }

  function handleEditAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
    enableEscKey();
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    enableEscKey();
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    document.removeEventListener("keyup", handleEscClose);
  }

  function enableEscKey() {
    document.addEventListener("keyup", handleEscClose);
  }

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleEditAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />

      <PopupWithForm name={"edit-profile"} title={"Edit profile"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="profile-name" className="form__input form__input-profile-name" type="text" name="name" placeholder="Name"
              minLength="2" maxLength="40" required />
        <span id="profile-name-error" className="form__error"></span>

        <input id="profile-title" className="form__input form__input-profile-title" type="text" name="about"
          placeholder="Title" minLength="2" maxLength="200" required />
        <span id="profile-title-error" className="form__error"></span>
      </PopupWithForm>

      <PopupWithForm name={"edit-avatar"} title={"Change profile picture"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="card-url" className="form__input form__input_avatar-update" type="url" name="avatar" placeholder="Link"
              required />
        <span id="card-url-error" className="form__error"></span>
      </PopupWithForm>

      <PopupWithForm name={"add-card"} title={"New place"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="card-title" className="form__input form__input_card-title" type="text" name="name" placeholder="Title"
              minLength="1" maxLength="30" required />
        <span id="card-title-error" className="form__error"></span>

        <input id="card-url" className="form__input form__input_card-url" type="url" name="link" placeholder="Link"
          required />
        <span id="card-url-error" className="form__error"></span>
      </PopupWithForm>
      <ImagePopup name={"imave-view"} />
    </>
  );
}

export default App;

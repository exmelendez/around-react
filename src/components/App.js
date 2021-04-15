import React, {useState, useEffect} from  'react';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", about: "", avatar: "" });
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api.getUserInfo()
      .then(user => {
        setCurrentUser(user);
/*
        api.getCardList()
        .then(cardData => {
          //code here use "cardData"
        })
        .catch((err) => console.log(err));
        */
      })
      .catch((err) => console.log(err));
      
  }, []);

  function handleCardClick(card) {
    setImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card);
    enableEscKey();
  }
  
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

  function closeAllPopups(e) {
    if (e.target.classList.contains('modal__close-btn') || e.target.classList.contains('modal_is-open') || e.key === "Escape") {
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setEditAvatarPopupOpen(false);
      setImagePopupOpen(false);
      setSelectedCard(null);
      document.removeEventListener("keyup", handleEscClose);
    }
  }

  function enableEscKey() {
    document.addEventListener("keyup", handleEscClose);
  }

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups(e);
    }
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleEditAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
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

        {
          isImagePopupOpen ? <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/> : ""
        }

      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

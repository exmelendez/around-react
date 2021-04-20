import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({onUpdateUser, isOpen, onClose}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);

  }, [currentUser]);

  return (
    <>
      <PopupWithForm name={"edit-profile"} title={"Edit profile"} isOpen={isOpen} onClose={onClose} handleSubmit={handleSubmit}>
        <input id="profile-name" onChange={handleNameChange} className="form__input form__input-profile-name" type="text" name="name" placeholder="Name"
              minLength="2" maxLength="40" defaultValue={currentUser.name} required />
        <span id="profile-name-error" className="form__error"></span>

        <input id="profile-title" onChange={handleDescriptionChange} className="form__input form__input-profile-title" type="text" name="about"
          placeholder="Title" minLength="2" maxLength="200" defaultValue={currentUser.about} required />
        <span id="profile-title-error" className="form__error"></span>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
import React, {useState} from 'react';

function PopupWithForm() {

  return (
    <div className="modal modal_type_edit-profile">
      <div className="modal__container">
        <button className="modal__close-btn modal_close_profile" aria-label="Close popup">&plus;</button>
        <h2 className="modal__title">Edit profile</h2>

        <form className="form form_type_edit-profile">
          <input id="profile-name" className="form__input form__input-profile-name" type="text" name="name" placeholder="Name"
            minlength="2" maxlength="40" required />
          <span id="profile-name-error" className="form__error"></span>

          <input id="profile-title" className="form__input form__input-profile-title" type="text" name="about"
            placeholder="Title" minlength="2" maxlength="200" required />
          <span id="profile-title-error" className="form__error"></span>

          <button className="form__save-btn" type="submit" aria-label="Save form">Save</button>
        </form>
      </div>
    </div>
  );

}

export default PopupWithForm;
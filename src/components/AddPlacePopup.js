import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [cardName, setCardName] = useState(null);
  const [cardLink, setCardLink] = useState(null);

  function handleCardLinkAdd(e) {
    setCardLink(e.target.value);
  }

  function handleCardNameAdd(e) {
    setCardName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: cardName,
      link: cardLink
    });
  }

  return (
    <PopupWithForm name={"add-card"} title={"New place"} isOpen={props.isOpen} onClose={props.onClose} handleSubmit={handleSubmit}>
      <input id="card-title" className="form__input form__input_card-title" type="text" name="name" placeholder="Title"
            minLength="1" maxLength="30" required onChange={handleCardNameAdd} />
      <span id="card-title-error" className="form__error"></span>

      <input id="card-url" className="form__input form__input_card-url" type="url" name="link" placeholder="Link" onChange={handleCardLinkAdd}
        required />
      <span id="card-url-error" className="form__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
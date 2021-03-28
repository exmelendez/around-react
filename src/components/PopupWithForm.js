function PopupWithForm(props) {
  return (
    
    <div className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_is-open' : ''}`} onClick={props.onClose}>
      <div className="modal__container">
        <button className={`modal__close-btn`} aria-label="Close popup" onClick={props.onClose}>&plus;</button>
        <h2 className="modal__title">{props.title}</h2>

        <form className={`form form_type_${props.name}`}>
          {props.children}

          <button className="form__save-btn" type="submit" aria-label="Submit form">Save</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
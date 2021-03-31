function ImagePopup(props) {
  const xSymbol = '\u002B';

  return (
    
  <div className={`modal modal_type_image-view ${props.isOpen ? 'modal_is-open' : ''}`} onClick={props.onClose}>
    <div className="modal__container modal__container_size-image" style={{ backgroundImage: `url(${props.card})` }}>
      <button className="modal__close-btn modal_close_image-view" aria-label="Close popup" onClick={props.onClose}>{xSymbol}</button>
      <p className="modal__image-title"></p>
    </div>
  </div>
  );
}

export default ImagePopup;
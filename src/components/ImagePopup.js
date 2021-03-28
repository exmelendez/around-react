function ImagePopup(props) {
  return (
    
  <div className={`modal modal_type_${props.name}`}>
    <div className="modal__container modal__container_size-image">
      <button className="modal__close-btn modal_close_image-view" aria-label="Close popup">&plus;</button>
      <p className="modal__image-title"></p>
    </div>
  </div>
  );
}

export default ImagePopup;
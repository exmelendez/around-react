import { useContext } from  'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="photos__item">
      <button className={`photos__delete-btn ${isOwn && 'photos__delete-btn_visible'}`} aria-label="Delete card" onClick={handleDeleteClick}></button>
      <div className="photos__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>

      <div className="photos__item-info">
        <p className="photos__title">{props.card.name}</p>
        <div className="photos__likes-container">
          <button className={`photos__love-btn ${isLiked && 'photos__love-btn_liked'}`} aria-label="Love" onClick={handleLikeClick}></button>
          <p className="photos__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
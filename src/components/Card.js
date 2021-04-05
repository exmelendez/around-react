function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li className="photos__item">
      <button className="photos__delete-btn" aria-label="Delete card"></button>
      <div className="photos__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>

      <div className="photos__item-info">
        <p className="photos__title">{props.card.name}</p>
        <div className="photos__likes-container">
          <button className="photos__love-btn" aria-label="Love"></button>
          <p className="photos__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
import {useState, useEffect, useContext} from  'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
    .then(() => {
      const updatedCards = cards.filter((c) => c._id !== card._id);
      setCards(updatedCards);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    api.getCardList()
      .then(cardData => {
        setCards(cardData);
      })
      .catch((err) => console.log(err));
      
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
          <button className="profile__avatar-overlay" onClick={props.onEditAvatar}></button>
        </div>

        <div className="profile__info">
          <p className="profile__name">{currentUser.name}</p>
          <button className="profile__edit-btn" onClick={props.onEditProfile} aria-label="Profile edit"></button>
          <p className="profile__title">{currentUser.about}</p>
        </div>

        <button className="profile__add-btn" onClick={props.onAddPlace} aria-label="Add card"></button>
      </section>

      <section className="photos">

       <ul className="photos__grid">
         {
           cards.map(card => (
             <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
           ))
         }
       </ul>
      </section>
    </main>
  );
}

export default Main;
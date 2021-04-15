import {useState, useEffect, useContext} from  'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

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
             <Card key={card._id} card={card} onCardClick={props.onCardClick} />
           ))
         }
       </ul>
      </section>
    </main>
  );
}

export default Main;
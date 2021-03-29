import {useState, useEffect} from  'react';
import api from '../utils/Api';


function Main(props) {
  const [userName, setUserName] = useState("Cousteau");
  const [userDescription, setUserDescription] = useState("Explorer");
  const [userAvatar, setUserAvatar] = useState('images/avatar_image-min.jpg');

  useEffect(() => {
    api.getUserInfo()
      .then(user => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
          <button className="profile__avatar-overlay" onClick={props.onEditAvatar}></button>
        </div>

        <div className="profile__info">
          <p className="profile__name">{userName}</p>
          <button className="profile__edit-btn" onClick={props.onEditProfile} aria-label="Profile edit"></button>
          <p className="profile__title">{userDescription}</p>
        </div>

        <button className="profile__add-btn" onClick={props.onAddPlace} aria-label="Add card"></button>
      </section>

      <section className="photos">
       <ul className="photos__grid"></ul>
      </section>
    </main>
  );
}

export default Main;
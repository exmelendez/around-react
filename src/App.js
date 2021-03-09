import logo from './images/logo.svg';

function App() {
  return (
    <>
      <header className="header">
        <a className="header__logo-link" href="../public/index.html">
          <img className="header__logo" src={logo} alt="Around the US logo" />
        </a>
      </header>

      <main className="content">

        <section className="profile">
          <div className="profile__avatar">
            <button className="profile__avatar-overlay"></button>
          </div>

          <div className="profile__info">
            <p className="profile__name">Cousteau</p>
            <button className="profile__edit-btn" aria-label="Profile edit"></button>
            <p className="profile__title">Explorer</p>
          </div>

          <button className="profile__add-btn" aria-label="Add card"></button>
        </section>

        <section className="photos">
          <ul className="photos__grid"></ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2020 Around The U.S.</p>
      </footer>

      {/* EDIT PROFILE MODAL */}
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

      {/* ADD CARD MODAL */}
      <div className="modal modal_type_add-card">
        <div className="modal__container">
          <button className="modal__close-btn modal_close_add-card" aria-label="Close popup">&plus;</button>
          <h2 className="modal__title">New place</h2>
          <form className="form form_type_add-card">
            <input id="card-title" className="form__input form__input_card-title" type="text" name="name" placeholder="Title"
              minlength="1" maxlength="30" required />
            <span id="card-title-error" className="form__error"></span>

            <input id="card-url" className="form__input form__input_card-url" type="url" name="link" placeholder="Link"
              required />
            <span id="card-url-error" className="form__error"></span>

            <button className="form__save-btn" aria-label="Save form">Save</button>
          </form>
        </div>
      </div>

      {/* IMAGE VIEW MODAL */}
      <div className="modal modal_type_image-view">
        <div className="modal__container modal__container_size-image">
          <button className="modal__close-btn modal_close_image-view" aria-label="Close popup">&plus;</button>
          <p className="modal__image-title"></p>
        </div>
      </div>

      {/* CONFIRM CARD DELETE MODAL */}
      <div className="modal modal_type_confirm-delete">
        <div className="modal__container modal__container_type-delete">
          <button className="modal__close-btn modal_close_confirm-delete" aria-label="Close popup">&plus;</button>
          <h2 className="modal__title">Are you sure?</h2>

          <form className="form form_type_confirm-delete">
            <button className="form__save-btn modal__confirm-delete-btn" type="submit"
              aria-label="Confirm Card Delete">Yes</button>
          </form>
        </div>
      </div>

      {/* UPDATE AVATAR MODAL */}
      <div className="modal modal_type_update-avatar">
        <div className="modal__container modal__container_update-avatar">
          <button className="modal__close-btn modal_close_confirm-delete" aria-label="Close popup">&plus;</button>
          <h2 className="modal__title">Change profile picture</h2>

          <form className="form form_type_edit-avatar">
            <input id="card-url" className="form__input form__input_avatar-update" type="url" name="avatar" placeholder="Link"
              required />
            <span id="card-url-error" className="form__error"></span>

            <button className="form__save-btn" aria-label="Save form">Save</button>
          </form>
        </div>
      </div>

      {/* CARD TEMPLATE */}
      <template className="card-template">
        <li className="photos__item">
          <button className="photos__delete-btn" aria-label="Delete card"></button>
          <div className="photos__image"></div>

          <div className="photos__item-info">
            <p className="photos__title"></p>
            <div className="photos__likes-container">
              <button className="photos__love-btn" aria-label="Love"></button>
              <p className="photos__likes"></p>
            </div>
          </div>
        </li>
      </template>

    </>
  );
}

export default App;

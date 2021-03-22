function Main() {

  //Handlers here
  function handleEditAvatarClick(evt) {
    const popup = document.querySelector(".modal_type_update-avatar");
    popup.classList.add("modal_is-open");
    console.log("clicked", evt);
  }

  function handleEditProfileClick(evt) {
    const popup = document.querySelector(".modal_type_edit-profile");
    popup.classList.add("modal_is-open");
    console.log("clicked", evt);
  }

  function handleEditAddPlaceClick(evt) {
    const popup = document.querySelector(".modal_type_add-card");
    popup.classList.add("modal_is-open");
    console.log("clicked", evt);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <button className="profile__avatar-overlay" onClick={handleEditAvatarClick}></button>
        </div>

        <div className="profile__info">
          <p className="profile__name">Cousteau</p>
          <button className="profile__edit-btn" onClick={handleEditProfileClick} aria-label="Profile edit"></button>
          <p className="profile__title">Explorer</p>
        </div>

        <button className="profile__add-btn" onClick={handleEditAddPlaceClick} aria-label="Add card"></button>
      </section>

      <section className="photos">
       <ul className="photos__grid"></ul>
      </section>
    </main>
  );
}

export default Main;
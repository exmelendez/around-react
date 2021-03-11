function Main() {
    return (
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
    );
}

export default Main;
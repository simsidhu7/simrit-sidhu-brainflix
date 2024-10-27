import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <section className="comments-form">
      <h3 className="comments-form__comments-amount">3 Comments</h3>
      <form className="comments-form__container">
        <label htmlFor="comments-form__comment">JOIN THE CONVERSATION</label>
        <div className="comments-form__input">
          <img
            className="comments-form__profile-picture"
            src="../src/assets/images/Mohan-muruge.jpg"
            alt="Mohan's picture"
          />
          <textarea
            id="comments-form__comment"
            name="comment"
            placeholder="Add a new comment"
            className="comments-form__commentarea"
          />
        </div>
        <button type="submit" className="comments-form__button">
          COMMENT
        </button>
      </form>
    </section>
  );
}

export default CommentsForm;

import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <section className="comments-form">
      <h3>JOIN THE CONVERSATION</h3>
      <form className="comments-form__container">
        <div className="comments-form__input">
          <img
            className="comment-form__profile-picture"
            src="../src/assets/images/Mohan-muruge.jpg"
            alt="Mohan's picture"
          />
          <textarea
            name="comment"
            placeholder="Add a new comment"
            className="comment-form__comment"
          />
        </div>
        <button type="submit" className="comment-form__button">COMMENT</button>
      </form>
    </section>
  );
}

export default CommentsForm;

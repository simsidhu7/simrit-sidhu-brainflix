import "./Comments.scss";

function Comments({ comments }) {
    return(
  <section className="comments">
    <h3>Comments</h3>
    <ul className="comments__list">
      {comments.map((comment) => (
        <li key={comment.id} className="comments__list-item">
          <div className="comments__container">
            <span className="comments__name">{comments.name}</span>
            <span className="comments__date">
              {new Date(comment.timestamp).toLocaleDateString()}
            </span>
          </div>
          <p className="comments__text">{comment.comment}</p>
        </li>
      ))}
    </ul>
  </section>
  );
}
export default Comments;

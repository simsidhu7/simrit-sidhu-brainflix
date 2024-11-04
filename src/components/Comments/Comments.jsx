import "./Comments.scss";

function Comments({ comments }) {
  return (
    <div className="comments">
      <ul className="comments__list">
        {comments?.map((comment) => (
          <li key={comment.id} className="comments__list-item">
            <div className="comments__container">
              <p className="comments__image-placeholder"></p>
              <span className="comments__name">{comment.name}</span>
              <span className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="comments__text">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Comments;

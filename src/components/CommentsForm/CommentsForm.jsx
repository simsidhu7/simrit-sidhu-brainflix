const handleSubmit = (event) => {
  //prevent new page load
  event.preventDefault();

  //newEntry - a new object with what you need and it stores the form details
  const newEntry = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };
};

<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name"></input>

  <label htmlFor="comment">Comment</label>
  <input type="text" name="comment"></input>
  <button type="submit"></button>
</form>;


const PostItem = ({ post }) => {
  return (
    <li className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <strong>Autor:</strong> {post.author} ({post.authorEmail})
      </p>
    </li>
  );
};

export default PostItem;



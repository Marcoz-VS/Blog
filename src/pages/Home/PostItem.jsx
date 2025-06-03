import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  if (!post || !post.id || !post.assignedUserId) {
    return <li className="post-item">Erro: Dados do post inválidos</li>;
  }

  return (
    <li className="post-item">
      <Link to={`/posts/${post.id}?userId=${post.assignedUserId}`} className="post-link">
        <div className="post-content">
          <div className="post-header">
            <span className="post-author">{post.author || 'Desconhecido'}</span>
            <span className="post-email"> · {post.authorEmail || 'Sem e-mail'}</span>
          </div>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body ? post.body.slice(0, 100) + '...' : 'Sem conteúdo'}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;

import './PostInfo.css';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CommentsList } from '../Comments/CommentsList/CommentsList';
import { API_POST } from '../../Api/apiPost';
import { EditModal } from '../Modal/EditModal';
import axios from 'axios';

export default function PostInfo() {
  const { postID } = useParams();
  const postURL = `${API_POST}/${postID}`;

  const [post, setPost] = useState({});
  
  useEffect(() => {
    fetch(postURL)
    .then(res => res.json())
    .then(data => setPost(data))
}, []);

const changePost = ({ titlePost, descriptionPost }) => {
  axios.put(`${API_POST}/${postID}`, {
    title: titlePost,
    body: descriptionPost,
  })
  .then(response => {
    setPost(response.data)
  })
}

  return (
    <div className="post-container">
      <Card border="primary" style={{ width: '18rem', display: 'flex', justifyContent: 'center' }}>
        <Card.Header>Post {post.id}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <EditModal changePost={changePost} />
        </Card.Body>
      </Card>
      <CommentsList postId={postID} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './CommentsList.css';
import CommentsItem from '../CommentsItem/CommentsItem';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [bodyComment, setBodyComment] = useState('');

  const commentsUrl = `https://bloggy-api.herokuapp.com/comments/?postId=${postId}`;

  useEffect(() => {
    fetch(commentsUrl)
      .then(res => res.json())
      .then(data => setComments(data))
    console.log(comments)
  }, []);

  const addNewComment = (e) => {
    e.preventDefault();

    const newComment = {
      id: Date.now(),
      body: bodyComment,
      postId: postId,
    }

    axios.post(commentsUrl, newComment)
      .then(response => {
        console.log(response)
        setComments(response.data)
      })
      
  }

  return (
    <div className="comment-section">
      <h3 style={{ textAlign: 'center' }}>Comments on this post: {comments.length}</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>New comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="new comment"
          autoFocus
          value={bodyComment}
          onChange={e => setBodyComment(e.target.value)}
        />
        <Button style={{ margin: '10px' }} variant="primary" onClick={addNewComment}>Add</Button>
      </Form.Group>

      {
        comments.map(comment => <CommentsItem comments={comment} key={comment.id} />)
      }
    </div>
  );
};

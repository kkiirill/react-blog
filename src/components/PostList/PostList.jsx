import React, { useEffect, useState } from 'react';
import './PostList.css';
import { API_POST, getPostFromServer } from '../../Api/apiPost';
import { PostItem } from '../PostItem/PostItem';
import { Spinner } from 'react-bootstrap';
import { MyModal } from '../Modal/MyModal';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    try {
      setLoading(true);
      getPostFromServer().then((data) => {
        setPosts(data);
        setLoading(false);
      })
    } catch {
      new Error('Posts not found')
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  const addPost = ({ titlePost, descriptionPost }) => {
    if (titlePost || descriptionPost) {
      const newPost = {
        id: Math.random().toString(36).substring(2, 9),
        title: titlePost,
        body: descriptionPost,
      }

      axios.post(API_POST, newPost)
        .then(response => {
          setPosts(response.data)
        })
    }
  }

  const removePosts = (post) => {
    axios.post(API_POST, post)
        .then(response => {
          setPosts(response.data)
        })
  }

  const changePost = ({ titlePost, descriptionPost }) => {
    if (titlePost | descriptionPost) {
      setPosts(posts.map((p) => {
        if (p.title !== titlePost) {
          setPosts(p.title === p.titlePost)
        }

        if (p.description !== descriptionPost) {
          setPosts(p.description === p.descriptionPost)
        }
        return posts;
      }))
    }
  }

  return (
    <main>
      <MyModal addPost={addPost} />
      <br style={{ border: '1px solid grey' }} />
      {loading
        ? <Spinner animation="border" size="xl" />
        : <PostItem posts={posts} remove={removePosts} changePost={changePost} />
      }
    </main>
  )
}

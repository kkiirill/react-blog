import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EditModal } from '../Modal/EditModal';

export const PostItem = ({ posts, remove, changePost }) => {

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Card key={post.id}>
            <Card.Header as="h5">Post {index + 1}</Card.Header>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Link
                  to={`/post/${post.id}`}
                >
                  <Button variant="primary">Read more..</Button>
                </Link>
              </Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  
                <Button
                  style={{ width: '90px', margin: '30px' }}
                  size="xl"
                  variant="danger"
                  onClick={() => remove(post)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
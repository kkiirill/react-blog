import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function MyModal({ addPost }) {
  const [show, setShow] = useState(false);
  const [titlePost, setTitlePost] = useState('');
  const [descriptionPost, setDescriptionPost] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {

    addPost({ titlePost, descriptionPost })
    setTitlePost('');
    setDescriptionPost('');
  }

  const handleChangeTitle = (e) => {
    setTitlePost(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescriptionPost(e.target.value)
  }

  return (
    <div style={{ margin: '15px' }}>
      <Button variant="primary" onClick={handleShow}>
        Add post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                autoFocus
                value={titlePost}
                onChange={handleChangeTitle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                autoFocus
                value={descriptionPost}
                onChange={handleChangeDescription}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

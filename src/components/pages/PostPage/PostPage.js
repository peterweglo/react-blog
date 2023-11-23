import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { removePost } from '../../../redux/postsRedux';

const PostPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removePost(id));
  };

  const postData = useSelector((state) => getPostById(state, id));
  if (!postData) return <Navigate to="/" />;

  return (
    <main className="d-flex justify-content-center">
      <div className="pe-5 me-5">
        <Card className="mb-4 border border-0">
          <Card.Body>
            <Card.Title>{postData.title}</Card.Title>
            <Card.Text>
              <strong>Author:</strong> {postData.author}
            </Card.Text>
            <Card.Text>
              <strong>Published:</strong> {postData.publishedDate}
            </Card.Text>
            <Card.Text>{postData.shortDescription} </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="ps-5 ms-5">
        <Button
          variant="outline-info"
          as={Link}
          to={`/post/edit/${postData.id}`}
          className="m-1"
        >
          Edit
        </Button>
        <Button variant="outline-danger" className="m-1" onClick={handleShow}>
          Delete
        </Button>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              This operation will completely remove this post from the app!
              <br />
              Are you sure you want to do that?
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </main>
  );
};

export default PostPage;

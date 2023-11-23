import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddPostForm = () => {
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Enter date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control type="text" placeholder="Leave a comment here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control type="text" placeholder="Leave a comment here" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPostForm;

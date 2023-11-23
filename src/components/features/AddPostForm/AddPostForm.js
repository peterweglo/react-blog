import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    dispatch(
      addPost({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
      })
    );
    e.preventDefault();
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit} style={{ width: '70%', margin: '0 auto' }}>
      <h1>Add post</h1>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          style={{ width: '50%' }}
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          style={{ width: '50%' }}
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Published</Form.Label>
        <Form.Control
          style={{ width: '50%' }}
          type="date"
          placeholder="Enter date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
          minLength="8"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          style={{ height: '100px' }}
          as="textarea"
          placeholder="Leave a comment here"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          style={{ height: '200px' }}
          as="textarea"
          placeholder="Leave a comment here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;

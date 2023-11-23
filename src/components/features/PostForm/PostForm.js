import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit} style={{ width: '70%', margin: '0 auto' }}>
      <h1>{actionText}</h1>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          style={{ width: '50%' }}
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          style={{ width: '50%' }}
          type='text'
          placeholder='Enter author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          minLength='3'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Published</Form.Label>
        <Form.Control
          style={{ width: '50%' }}
          type='date'
          placeholder='Enter date'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
          minLength='8'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          style={{ height: '100px' }}
          as='textarea'
          placeholder='Leave a comment here'
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Main content</Form.Label>
        <Form.Control
          style={{ height: '200px' }}
          as='textarea'
          placeholder='Leave a comment here'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;

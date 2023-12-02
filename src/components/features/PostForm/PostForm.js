import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {
  const categories = useSelector(getAllCategories);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.category || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  const handleSubmit = () => {
    const contentWithoutHTML = content.replace('<p><br></p>', '');
    const isContentEmpty = contentWithoutHTML.length === 0;

    if (isContentEmpty) {
      setContentError(true);
    }

    setDateError(!publishedDate);
    setSelectError(!category);

    if (!isContentEmpty && publishedDate && category)
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
  };
  return (
    <Form
      onSubmit={validate(handleSubmit)}
      style={{ width: '70%', margin: '0 auto' }}
    >
      <h1>{actionText}</h1>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 3 })}
          style={{ width: '50%' }}
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <small className='d-block form-text text-danger mt-2'>
            Title is too short (min is 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 3 })}
          style={{ width: '50%' }}
          type='text'
          placeholder='Enter author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && (
          <small className='d-block form-text text-danger mt-2'>
            Author is too short (min is 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Published</Form.Label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
        />
        {dateError && (
          <small className='d-block form-text text-danger mt-2'>
            The field is required
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formSelect'>
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>Salect category...</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </Form.Select>
        {selectError && (
          <small className='d-block form-text text-danger mt-2'>
            The field is required
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          style={{ height: '100px' }}
          as='textarea'
          placeholder='Leave a comment here'
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
            Description is too short (min is 20)
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme='snow'
          value={content}
          onChange={setContent}
          placeholder='Leave a comment here'
        />
        {contentError && (
          <small className='d-block form-text text-danger mt-2'>
            The field is required
          </small>
        )}
      </Form.Group>

      <Button variant='primary' type='submit'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;

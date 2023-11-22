import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));
  if (!postData) return <Navigate to='/' />;

  return (
    <main className='d-flex justify-content-center'>
      <div className='pe-2 me-2'>
        <Card className='mb-4 border border-0'>
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
      <div className='ps-2 ms-2'>
        <Button
          variant='outline-info'
          as={Link}
          to={`/post/edit/${postData.id}`}
          className='m-1'
        >
          Edit
        </Button>
        <Button
          variant='outline-danger'
          as={Link}
          to={`/post/edit/${postData.id}`}
          className='m-1'
        >
          Delete
        </Button>
      </div>
    </main>
  );
};

export default PostPage;

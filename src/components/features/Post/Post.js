import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const postId = props.id;
  return (
    <Card style={{ width: '32%' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <p>
          <strong>Author:</strong> {props.author}
        </p>
        <p>
          <strong>Published:</strong> {props.publishedDate}
        </p>
        <p>{props.shortDescription}</p>
        <Button variant="primary" as={Link} to={`/post/${postId}`}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;

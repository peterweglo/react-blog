import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const postId = props.id;
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <strong>Author:</strong> {props.author}
        </Card.Text>
        <Card.Text>
          <strong>Published:</strong> {props.publishedDate}
        </Card.Text>
        <Card.Text>{props.shortDescription} </Card.Text>
        <Button variant="primary" as={Link} to={`/post/${postId}`}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;

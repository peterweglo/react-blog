import Post from '../Post/Post';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Row, Col } from 'react-bootstrap';
import { getAllPosts } from '../../../redux/postsRedux';

const List = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Row>
      <Col className="d-flex justify-content-between">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Col>
    </Row>
  );
};

export default List;

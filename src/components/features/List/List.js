import Post from '../Post/Post';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Row, Col } from 'react-bootstrap';
import { getAllPosts } from '../../../redux/postsRedux';

const List = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} xs='12' md='6' lg='4'>
          <Post {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default List;

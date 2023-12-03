import Post from '../Post/Post';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Row, Col } from 'react-bootstrap';
import { getAllPosts } from '../../../redux/postsRedux';
import { getPostsByCategoryId } from '../../../redux/postsRedux';

const List = (props) => {
  const posts = useSelector((state) => {
    if (props.category) {
      return getPostsByCategoryId(state, props.category);
    } else {
      return getAllPosts(state);
    }
  });

  if (props.category && posts.length === 0) {
    return <p>No posts in this category...</p>;
  } else
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

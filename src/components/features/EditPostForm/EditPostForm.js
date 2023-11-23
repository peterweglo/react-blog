import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { useDispatch } from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postData = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  if (!postData) return <Navigate to='/' />;
  return (
    <PostForm
      action={handleSubmit}
      actionText='Edit post'
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      shortDescription={postData.shortDescription}
      content={postData.content}
    />
  );
};

export default EditPostForm;

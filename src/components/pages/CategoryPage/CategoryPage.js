import { useParams } from 'react-router-dom';
import List from '../../features/List/List';

const CategoryPage = () => {
  const { categoryId } = useParams();
  console.log('List', <List />);
  //   const posts = useSelector((state) => getPostsByCategoryId(state, categoryId));

  return (
    <>
      <h1 className='pb-3'>Category: {categoryId}</h1>
      <List category={categoryId} />
    </>
  );
};
export default CategoryPage;

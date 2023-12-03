import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <div>
      <h1>All categories</h1>
      {categories.map((category) => (
        <ListGroup.Item key={category.id}>
          <Link to={`/categories/${category.name}`}>{category.name}</Link>
        </ListGroup.Item>
      ))}
    </div>
  );
};

export default Categories;

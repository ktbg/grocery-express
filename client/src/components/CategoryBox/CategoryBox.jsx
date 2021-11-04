import { Link } from 'react-router-dom'
import './CategoryBox.css'

const CategoryBox = (props) => {
  const { categories } = props

  return (
    <div className='category-box-group'>
      {categories.map((category) => 
        (
          <Link key={category.id} to={`/categories/${category.id}`} >
            <div className={`category-box ${category.category}`} key={category.id} >
              <h3>{category.category}</h3>
            </div>
          </Link>
        )
      )}
    </div>
  )
}

export default CategoryBox

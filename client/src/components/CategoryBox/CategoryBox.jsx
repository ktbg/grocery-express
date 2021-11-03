import './CategoryBox.css'

const CategoryBox = (props) => {
  const { categories } = props

  return (
    <div className='category-box-group'>
      {categories.map((category) => 
        (
          <div className={`category-box ${category.category}`} key={category.id} >
            <h3>{category.category}</h3>
          </div>
        )
      )}
    </div>
  )
}

export default CategoryBox

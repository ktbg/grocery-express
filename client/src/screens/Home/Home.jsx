import './Home.css'
import Button from '../../components/Button/Button';

const Home = (props) => {
  const { categories } = props;
  return (
    <div className='home'>
      <header className='hero'>
        <div className='hero-text'>
          <h1 className='title'>Grocery shopping, made simple</h1>
          <p className='about-text'>Shop your local market from the comfort of your home and have your items ready for in store pick-up and payment.</p>
          <Button name='Browse Products' redirectLocation='/#categories' className="main"/>
        </div>
        <div className='hero-img'>

        </div>
      </header>
      <div className='branding'>
        <div className='branding-box'>
          <h4 className='branding-title'>Shop</h4>
          <p className='branding-text'>Browse departments and select items to add to your cart.</p>
        </div>
        <div className='branding-box'>
          <h4 className='branding-title'>Send</h4>
          <p className='branding-text'>Send your selections to the market to be picked and packed for your arrival</p>
        </div>
        <div className='branding-box'>
          <h4 className='branding-title'>Pick Up</h4>
          <p className='branding-text'>Pick up and pay for your ready-to-to order and be on your way!</p>
        </div>
      </div>
      <div className='category-container' id='categories'>

      </div>
    </div>
  )
}

export default Home

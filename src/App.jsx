import './App.css'
import SearchInput from './components/SearchInput'
function App() {

  return (
    <>
      {/* This is the nav bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px', alignItems: 'center' }}>

        {/*1/3*/}
        <div className='nav-first'>
          <img src="/Lab_02/chefify.png" alt=""/>
          <SearchInput/>
        </div>

        {/*2/3*/}
        <div className='menu'>
          <div><a href="#" className='menu-item'>What to cook</a></div>
          <div><a href="#" className='menu-item'>Recipes</a></div>
          <div><a href="#" className='menu-item'>Ingredients</a></div>
          <div><a href="#" className='menu-item'>Occasions</a></div>
          <div><a href="#" className='menu-item'>About Us</a></div>
        </div>

        {/*3/3*/}
        <div>
          <a href="#" className="your-recipe-box">
            <img src="/Lab_02/check.png" alt="" className="checkbox" />
            <div className="checkbox-text">Your Recipe Box</div>
          </a>
          <a href="" className="profile">
            <img className='profile-image' src="" alt="" />
          </a>
        </div>
      </div>

      {/* This is the border */}
      <div></div>

      {/* This is the border */}
      <div></div>
    </>
  )
}

export default App

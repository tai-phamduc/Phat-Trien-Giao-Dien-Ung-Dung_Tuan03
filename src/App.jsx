import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileBox from './components/ProfileBox'
import SavedRecipes from './components/SavedRecipes'
function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className='px-5'>
          <ProfileBox />
          <SavedRecipes />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

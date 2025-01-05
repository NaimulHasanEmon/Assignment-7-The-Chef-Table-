import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {
  return (
    <>
    <div className='mx-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
    </>
  )
}

export default App
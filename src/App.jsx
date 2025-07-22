import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/App.css'
import Navigation from './Navigation'
import Intro from './Intro'
import Collection from './Collection'
import Footer from './Footer'
import Detail from './Detail'
import Cart from './Cart'
import Home from './Home'

function App() {
  

  return (
    <div>
      <Router>
        <div>
        <Navigation />
    <Routes>
    <Route path='/' exact element={<Intro/>}/>
    <Route path='/3DShoppingPage/' element={<Intro/>}/>
    <Route path='/3DShoppingPage/main' element={<Home/>}/>
    <Route path='/3DShoppingPage/collection/:category' element={<Collection/>}/>
    <Route path='/3DShoppingPage/detail/:id' element={<Detail/>}/>
    <Route path='/3DShoppingPage/cart' element={<Cart/>}/>
  
    </Routes>
  
    </div>
  </Router>
  <Footer />
  
  </div>
      
   
  )
}

export default App;

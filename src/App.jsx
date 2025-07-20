import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/App.css'
import Navigation from './Navigation'
import Home from './Home'
import Collection from './Collection'
import Footer from './Footer'
import Detail from './Detail'
import Cart from './Cart'

function App() {
  

  return (
    <div>
      <Router>
        <div>
        <Navigation />
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/3DShoppingPage/' element={<Home/>}/>
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

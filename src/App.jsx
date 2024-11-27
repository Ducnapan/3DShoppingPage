import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/App.css'
import Navigation from './Navigation'
import Home from './Home'
import Collection from './Collection'

function App() {
  

  return (
    <div>
      <Router>
        <div>
        <Navigation />
    <Routes>
    <Route path='/3DShoppingPage'  element={<Home/>}/>
    <Route path='/'  element={<Home/>}/>
    <Route path='/3DShoppingPage/collection/:category' element={<Collection/>}/>
  
    </Routes>
  
    </div>
  </Router>
  {/*<Footer />*/}
  
  </div>
      
   
  )
}

export default App;

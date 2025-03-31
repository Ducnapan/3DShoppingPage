import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/App.css'
import Navigation from './Navigation'
import Home from './Home'
import Collection from './Collection'
import Footer from './Footer'
import Detail from './Detail'

function App() {
  

  return (
    <div>
      <Router>
        <div>
        <Navigation />
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/collection/:category' element={<Collection/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
  
    </Routes>
  
    </div>
  </Router>
  <Footer />
  
  </div>
      
   
  )
}

export default App;

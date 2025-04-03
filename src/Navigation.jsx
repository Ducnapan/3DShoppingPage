import { NavLink } from "react-router-dom";
import './styles/Navigation.css'

function Navigation(){
    return(
        <div>
     <nav className="navbar align-items-center">
    <div className="container d-flex justify-content-between">
      <a className="navbar-brand" style={{ fontSize: '50px' }}>NordicNest</a>
      <ul className="navbar-nav mx-auto flex-row justify-content-center">
        <li className="nav-item mx-4">
          <NavLink className="text-decoration-none text-dark" to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-4">
        <NavLink className="text-decoration-none text-dark" to="/history">History</NavLink>
          </li>
        <li className="nav-item mx-4 dropdown">
           <div className="down">
            <div className="d-flex flex-row"><h6 className="text-decoration-none text-dark ">Collections</h6><i className="mx-1 bi bi-caret-down-fill"></i></div>
            <div className="down-content">
              <div className="d-flex flex-column align-items-start">
            <NavLink className="text-decoration-none text-dark my-1 border-bottom" to="/collection/tables">Tables</NavLink>
            <NavLink className="text-decoration-none text-dark my-1 border-bottom" to="/collection/chairs">Chairs</NavLink>
            <NavLink className="text-decoration-none text-dark my-1 border-bottom" to="/collection/sofas">Sofas</NavLink>
            </div>
            </div>
               </div>
          </li>
      </ul>
      <div className="d-flex flex-row align-items-center">
      <form className="form-inline d-flex flex-row">
        <input className="form-control mr-sm-2 mx-1" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-dark my-2 my-sm-0 me-5" type="submit"><i className="bi bi-search"></i></button>
      </form>
      <NavLink className='text-decoration-none text-dark' to='/cart'>
      <div className="hilight d-flex flex-row justify-content-end align-items-end px-2">
      <h4><i className="bi bi-cart"></i></h4>
      <p className="mb-4 px-1 num"><strong>{0}</strong></p>
      <h6><strong>Cart</strong></h6>
      </div>
      </NavLink>

      </div>
    </div>
  </nav>
        </div>
    )
}
export default Navigation
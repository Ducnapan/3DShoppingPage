import { NavLink } from 'react-router-dom';
import './styles/Item.css';
const baseUrl =  import.meta.env.VITE_APP_BASE_URL;

function Item({id,name,price,img}){
    const newImg = `${baseUrl}${img}`;
    return(
        <div className='mx-5'>
          <NavLink className="link-underline link-underline-opacity-0" to={`/detail/${id}`}>
          <div className="item border overflow-hidden mt-2 shadow-sm">
        <div className="p-4 d-flex flex-column">
          <strong className="d-inline-block mb-2 text-primary-emphasis">{name}</strong>
          <h3 className="mb-0">${price}</h3>
          
        </div>
        <div className="col-auto d-none d-lg-block px-5">
          <svg className="bd-placeholder-img mb-2" width="250" height="200" xmlns="./imgs/lagkapten-adils-desk-white__0977229_pe813472_s5" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"> <image
    href={newImg}
    x="0"
    y="0"
    width="250"
    height="200"
    preserveAspectRatio="xMidYMid slice"
  /></svg>
        </div>
      </div>
      </NavLink>
        </div>
    )
}
export default Item;
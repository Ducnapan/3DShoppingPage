import { NavLink } from 'react-router-dom';
import './styles/Item.css'
import { useState } from 'react';

function CartItem({id,name,price,img, quantity : init}){
    const [quantity,setQuant] = useState(init)
    return(
        <div className='mx-5'>
         
          <div className="item border rounded overflow-hidden mt-2 shadow-sm text-dark">
        <div className="p-4 d-flex flex-row align-items-center">
        <div className="col-auto d-none d-lg-block px-5">
          <svg className="bd-placeholder-img mb-2" width="100" height="100" xmlns="./imgs/lagkapten-adils-desk-white__0977229_pe813472_s5" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"> <image
    href={img}
    x="0"
    y="0"
    width="100"
    height="100"
    preserveAspectRatio="xMidYMid slice"
  /></svg>
        </div> 
        <div className='d-flex flex-column'>
        <NavLink className="link-underline link-underline-opacity-0" to={`/detail/${id}`}>
          <strong className="d-inline-block mb-2 text-primary-emphasis me-5">{name}</strong>
          </NavLink>
          <div className='d-flex flex-row border-bottom'>
         <p><strong>Quantity: </strong><input type="number" id="quantity" name="quantity" min="1" max="4" step="1" value={quantity} onChange={(e) => setQuant(e.target.value)}/></p>
          <p className='ms-5'>Price @ ${price}</p>
          </div>
          <h5>Subtotal = ${price * quantity}</h5>
          </div>
        </div>
       
      </div>
      
        </div>
    )
}
export default CartItem;
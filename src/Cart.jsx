
import CartItem from "./CartItem";
import data from "./cart.json"


function Cart(){
   

    const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
   
    return(
        <div className="d-flex justify-content-center align-items-center my-5">
            <div className="bg-light" style = {{width:"70%",heigth:"70%"}}>
                <h1>Cart</h1>
                <div className="d-flex flex-column">
                {data.map((item) => (
                    <CartItem 
                    id={item.id}
                    name = {item.name}
                    price = {item.price}
                    img = {item.img}
                    quantity={item.quantity}
                   />
                   


                ))
                }
                </div>
                <h4>Total = {total}</h4>

            </div>

        </div>

    )
}
export default Cart;
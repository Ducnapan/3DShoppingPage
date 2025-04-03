import CartItem from "./CartItem";
import data from "./tempstore.json"


function Cart(){
    return(
        <div className="d-flex justify-content-center align-items-center my-5">
            <div className="bg-light" style = {{width:"70%",heigth:"70%"}}>
                <h1>Cart</h1>
                <CartItem className="d-flex flex-row"
                 id={data.at(0).id}
                 name = {data.at(0).name}
                 price = {data.at(0).price}
                 img = {data.at(0).img}
                 quantity={1}
                />
                <CartItem
                 id={data.at(10).id}
                 name = {data.at(10).name}
                 price = {data.at(10).price}
                 img = {data.at(10).img}
                 quantity={2}
                />
                <CartItem
                 id={data.at(20).id}
                 name = {data.at(20).name}
                 price = {data.at(20).price}
                 img = {data.at(20).img}
                 quantity={3}
                />

            </div>

        </div>

    )
}
export default Cart;
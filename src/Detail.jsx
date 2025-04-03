import data from "./tempstore.json";
import { useParams} from 'react-router-dom';
import { useState } from "react";
import FeatureTab from "./FeatureTab";

function Detail(){
    const {id} = useParams();
    const [flip,setFlip] = useState(true);
    const [quantity,setQuant] = useState(1)
    return(
        
        <div className="d-flex justify-content-center my-5">
            <div className="d-flex flex-column">

          <div className="d-flex flex-row justify-content-center align-items-center bg-white border rounded mb-5">
          <div className="col-auto d-none d-lg-block px-5 py-5">
          <svg className="bd-placeholder-img mx-2 border rounded " width="550" height="600" xmlns={data.at(id).img} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"> <image
    href={data.at(id).img}
    x="0"
    y="0"
    width="550"
    height="600"
    preserveAspectRatio="xMidYMid slice"
  /></svg>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-start">
            <h2>{data.at(id).name}</h2>
            <p>5 <a className="text-warning"><inline className="bi bi-star-fill"></inline><inline className="bi bi-star-fill"></inline><inline className="bi bi-star-fill"></inline><inline className="bi bi-star-fill"></inline><inline className="bi bi-star-fill"></inline></a><inline> (1500+)</inline></p>
            <div className="d-flex flex-row">
                <p>$</p>
            <h3>{data.at(id).price}</h3>

            </div>
            
            <div className="d-flex flex-column py-3 border-top border-bottom">   
                  <div className="d-flex flex-row">
                    <p className="mx-2 pointer" style={flip ? {borderBottom:"2px solid orange"}:{}} onClick={() => setFlip(true)}><strong>About</strong></p>
                    <p className="mx-2 pointer" style={flip ? {}:{borderBottom:"2px solid orange"}} onClick={() => setFlip(false)}><strong>Description</strong></p>
                  </div> 
                    {flip?
                    <div>
                        <ul className="text-start">
                            <li><strong>Brand:</strong> Ikea</li>
                            <li><strong>Color:</strong> white</li>
                            <li><strong>Dimension:</strong> 130x50cm</li>
                        </ul>

                    </div>:
                    <div>
                        <p className="py-3">This is a white chair filled with hole</p>

                    </div>}
            </div>
            <div className="d-flex flex-column text-start">
                <h4 className="text-success">In stock</h4>
                <p><strong>Quantity: </strong><input type="number" id="quantity" name="quantity" min="1" max="4" step="1" value={quantity} onChange={(e) => setQuant(e.target.value)}/></p>
                <div className="btn btn-warning my-2">Add to Cart</div>
                <div className="btn btn-warning mb-3">Buy Now</div>
            </div>

        </div>


          </div>
          
          <FeatureTab
          title={"People also buy"}
          />
</div>
        </div>
    )
}
export default Detail;
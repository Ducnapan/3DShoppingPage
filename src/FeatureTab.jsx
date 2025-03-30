import data from './tempstore.json'
import Item from './Item';


function FeatureTab({title}){
    return(
        <div className='d-flex justify-content-center align-items-center flex-column my-5'>
            <div className='align-self-start mx-5'>
            <h2><strong className="mx-5 mb-5 text-primary-emphasis">{title}</strong></h2>
            </div>
            <div className='d-flex flex-row mx-5 mt-5 align-items-center'>
                <h1><i className="bi bi-arrow-left-circle" width="100%"></i></h1>
               <Item
                name = {data.at(0).name}
                price = {data.at(0).price}
                img = {data.at(0).img}
               />
               <Item
               name = {data.at(10).name}
               price = {data.at(10).price}
               img = {data.at(10).img}
               />
               <Item
              name = {data.at(24).name}
              price = {data.at(24).price}
              img = {data.at(24).img}
               />
               <h1><i className="bi bi-arrow-right-circle" width="100%"></i></h1>
            </div>
           
        </div>
    )

}

export default FeatureTab;
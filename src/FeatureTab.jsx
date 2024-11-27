
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
                name = {"Table"}
                price = {50}
                img = {"none"}
               />
               <Item
               name = "Chair"
               price = {30}
               img = {"none"}
               />
               <Item
               name = "Desk"
               price = {50}
               img = {"none"}
               />
               <h1><i className="bi bi-arrow-right-circle" width="100%"></i></h1>
            </div>
           
        </div>
    )

}

export default FeatureTab;
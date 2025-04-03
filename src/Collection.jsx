import data from './tempstore.json';
import Item from './Item';
import { useParams } from 'react-router-dom';

function Collection(){
    const {category} = useParams();
   
    const filteredData = data.filter((item) =>
        item.category.toLowerCase().includes(category));

    const chunkArray = (data, row) => {
        let chunkArr = [];
        for (let i = 0; i < data.length; i += row) {
            chunkArr.push(data.slice(i, i + row));
        }
        return chunkArr;
    };

    const rowedItem = chunkArray(filteredData,3);


    return(
        
        <div className="d-flex flex-column align-items-center my-2">
       
        <div className="d-flex my-3 align-self-start" style={{width:"100%",marginLeft:"15%"}}><h3>collections: "{category}"</h3></div>
        {rowedItem.map((row, rowIndex) => (
            <div key={rowIndex} className="d-flex justify-content-center mb-3">
                {row.map((item) => (
                    <Item
                        id = {item.id}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                    />
                ))}
            </div>
        ))}
    </div>
    )
}
export default Collection;
import './styles/FeatureItem.css'


function FeatureItem({name,rates,img,show}){
    return(
        <div>
        <div className="fpos">
            {show ? <div className="d-flex flex-column fitems">
                <h2><strong>{name}</strong></h2>
                <div className="col-auto d-none d-lg-block">
                     <svg className="bd-placeholder-img border rounded mb-2" width="150" height="100" xmlns={{img}} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="25%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                     <h6>{rates}<i className="bi bi-star-fill p-1 text-warning"></i></h6>
                </div>
            </div>:<div></div>}
          
        </div>
    </div>
    )
}
export default FeatureItem;
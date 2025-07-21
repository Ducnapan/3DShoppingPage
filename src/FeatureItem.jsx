import './styles/FeatureItem.css';
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  

function FeatureItem({name,rates,img,show}){
    const newImg = `${baseUrl}${img}`;
    return(
        <div>
        <div className="fpos">
            {show ? <div className="d-flex flex-column fitems">
                <h2><strong>{name}</strong></h2>
                <div className="col-auto d-none d-lg-block">
                     <svg className="bd-placeholder-img border rounded mb-2" width="150" height="100" xmlns={newImg} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><image
    href={newImg}
    x="0"
    y="0"
    width="150"
    height="100"
    preserveAspectRatio="xMidYMid slice"
  /></svg>
                     <h6>{rates}<i className="bi bi-star-fill p-1 text-warning"></i></h6>
                </div>
            </div>:<div></div>}
          
        </div>
    </div>
    )
}
export default FeatureItem;
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import "../css/Product.css";



function Product({product}) {


    const navigate= useNavigate();
  return (
    <div className="Card">
      <img style={{textAlign:"center"}}  className="image" src={product.image} alt={product.title} />
      <div className="info">
        <p style={{textAlign:"center"}}>{product.title}</p>
        <h3 style={{textAlign:"center"}}>{product.price}$</h3>
      </div>
      <div className="flex-row">
        <button  onClick={()=>navigate(`/product-details/${product.id}`)}  className="btn-detail" >See Detail</button>
      </div>
    </div>
  )
}

export default Product

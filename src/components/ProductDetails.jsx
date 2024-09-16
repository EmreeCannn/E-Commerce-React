import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/Slices/ProductSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, Calculate } from "../redux/Slices/Basket";

function ProductDetails() {
  const {ProductId} = useParams();

  const dispatch =useDispatch();
  
  const {products,selectedProduct } = useSelector((store) => store.product);





  const [count,SetCount]=useState(0);

 
   useEffect(()=>{
     getProductById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const increment = ()=>{
    SetCount((prev)=>prev+1);
    //  prev burada bir önceki değeri tutar
  };
  const decrement = ()=>{
    SetCount((prev)=>prev-1);
    if(count<=0){
      SetCount(0);
    }
  };

  const addBasket = () =>{
     const payload ={
       ProductId,
       price,
       title,
       description,
       image,
       count
     }

     
     dispatch(addToBasket(payload));
    //   her ürün eklediğimde total price i güncelemem lazım 
    dispatch(Calculate());

  }

  const getProductById=()=>{
    products && products.map((product)=>{
        if(product.id===Number(ProductId)){
            dispatch(setSelectedProduct(product))
            localStorage.setItem("products",JSON.stringify(product));
        }
        return
    })
  };
  getProductById();

  const savedProduct = JSON.parse(localStorage.getItem("products"));
  const {price,title,description,image} =savedProduct;


  return (
    <div style={{marginTop:"60px",display:"flex" ,alignItems:"flex-start"}}>
        <div style={{marginRight:"40px"}}>
          <img src={savedProduct.image} width={300} height={400} />
        </div>
        <div>
            <h1>{savedProduct.title}</h1>
            <p style={{fontSize:"21px"}}>{savedProduct.description}</p>
            <h1>{savedProduct.price}$</h1>
             <div style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"30px"}}>
                <CiCirclePlus onClick={increment} style={{cursor:"pointer"}} />
                <span>{count}</span>
                <CiCircleMinus onClick={decrement}  style={{cursor:"pointer"}}/>
            </div>
            <div>
                <button onClick={addBasket} style={{marginTop:"13px",border:"none", padding:"13px", borderRadius:"16px",cursor:"pointer"}} >Add To Card</button>
            </div>
        </div>
        
        
    </div>
  );
}

export default ProductDetails;

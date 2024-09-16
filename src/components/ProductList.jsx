/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { getProducts } from "../redux/Slices/ProductSlice"
import {useDispatch, useSelector} from "react-redux"
import Product from "./Product";
const ProductList = () => {

    const dispatch= useDispatch();

    useEffect(()=>{
        //? ilk render edildiğinde bana bütün ürünleri getirsin 
        dispatch(getProducts());

    },[]);
    const {products} = useSelector((store)=>store.product);

    //  useSelector hooku bana initial statimin değerlerini döner 
   
  return (
    <div className="flex-row" style={{flexWrap:"wrap",marginTop:"30px", marginLeft:"130px", justifyContent:"flex-start",alignItems:"center"}}>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default ProductList

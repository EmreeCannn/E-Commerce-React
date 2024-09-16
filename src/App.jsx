import "./App.css";
import Header from "./components/Header";

import PageContainer from "./container/PageContainer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { Calculate, deleteFromBasket, setDrawer } from "./redux/Slices/Basket";
import { useEffect, useState } from "react";
function App() {
  const { ProductsInBasket,drawer, totalPrice } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  
 


  useEffect(()=>{
     dispatch(Calculate());
   },[])


   function evet(id){
    dispatch(deleteFromBasket(id));
    dispatch(Calculate());
   }
  

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        {/* roterconfig benim home page mi render edicek  */}
        <Drawer onClose={()=>dispatch(setDrawer())} anchor="left" open={drawer}>
          {ProductsInBasket &&
            ProductsInBasket.map((product) => {
            
              return (
                <>
                <div className="basketCard" key={product.ProductId}>
                  <div>
                    <img className="basketimg" src={product.image} />
                  </div>
                  <div>
                    <p>
                      {product.title}({product.count})
                    </p>
                    <p>{product.price}$</p>
                  </div>
                  <button onClick={()=>evet(product.ProductId)} className="btn">delete product</button>
                </div>
                
                </>
                
              );
            }
            )}
            <div>
              {ProductsInBasket.length<=0 ?   <p>no product</p>  : <h2 style={{marginLeft:"20px"}} >Total Price : {totalPrice.toFixed(2)}$</h2>   } 
            </div>
        </Drawer>
        <Loading />
      </PageContainer>
    </>
  );
}

export default App;

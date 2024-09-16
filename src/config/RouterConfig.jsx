import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-details/:ProductId" element={<ProductDetails/>}></Route>
        {/* : kullanmamın sebebi : dan sonra oraya navigateden göderdiğim değerin oturması dinamik bir değer  */}
      </Routes>
    </div>
  )
}

export default RouterConfig

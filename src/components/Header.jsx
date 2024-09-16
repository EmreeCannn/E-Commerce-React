import "../css/Header.css";
import image from "../images/images.png";
import { IoBagOutline } from "react-icons/io5";

import Badge from "@mui/material/Badge";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/Slices/Basket";

function Header() {
  const { ProductsInBasket } = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  return (
    <div className="Header-wrapper">
      <div className="Header-left-section flex-row">
        <img src={image} alt="" className="logo" />
        <p className="logo-text">Emre Anonim Şirketleri</p>
      </div>
      <div className="Header-right-section">
        <input
          className="search-input"
          type="text"
          placeholder="Search product"
        />
        <Badge  badgeContent={ProductsInBasket.length} color="primary">
          <IoBagOutline onClick={()=>dispatch(setDrawer())} className="react-logo" />
        </Badge>
      </div>
    
    </div>
  );
}

export default Header;

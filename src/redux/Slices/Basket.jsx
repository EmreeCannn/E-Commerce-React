/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const getBasketProductsFromStorage = () => {
  if (localStorage.getItem("ProductsInBasket")) {
    return JSON.parse(localStorage.getItem("ProductsInBasket"));
  }
  return [];
};

const initialState = {
  ProductsInBasket: getBasketProductsFromStorage(),
  drawer:false,
  totalPrice:0
};

const FromBasketToStorage = (item) => {
  localStorage.setItem("ProductsInBasket", JSON.stringify(item));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      if (action.payload.count > 0) {
        const findProduct =
          
          state.ProductsInBasket.find(
            (product) => product.ProductId == action.payload.ProductId
          );
        if (findProduct) {
           
          // eğer bu kod bloğu çalışırsa anlamı ben o ürünü daha önce ekledim demek istiyorum
          const extractedProduct = state.ProductsInBasket.filter(
            (product) => product.ProductId != action.payload.ProductId
          );
          //  burada  ben zaten var olan ürün  dışındaki diğerlerini al diyorum
          //   eğer ben aynı ürünü 2 kez eklediğimde farklı 2 tane değer olmaması için
          findProduct.count += action.payload.count;
          state.ProductsInBasket = [...extractedProduct, findProduct];
          
          FromBasketToStorage(state.ProductsInBasket);
        } else {
          
          state.ProductsInBasket = [...state.ProductsInBasket, action.payload];
          FromBasketToStorage(state.ProductsInBasket);
        }
      }
    },
    setDrawer:(state)=>{
        state.drawer= !state.drawer;
        //  bu fonksyionu her çağırdığımda değerini zıttına  eşitliyecek 
        //  true ise false false ise true
    },
    Calculate:(state) => {
        state.totalPrice=0;
        state.ProductsInBasket && state.ProductsInBasket.map(product=>{
            state.totalPrice+=(product.count * product.price);
        })
    },
    deleteFromBasket:(state,action) =>{
       const extracted= state.ProductsInBasket && state.ProductsInBasket.filter(product=>{
            return product.ProductId != action.payload
        });
        alert(extracted);
            state.ProductsInBasket=extracted
            FromBasketToStorage(state.ProductsInBasket);
    }
  },
});

export const { addToBasket,setDrawer,Calculate,deleteFromBasket } = basketSlice.actions;

export default basketSlice.reducer;

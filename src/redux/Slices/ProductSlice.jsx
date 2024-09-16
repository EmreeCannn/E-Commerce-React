/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products: [],
    selectedProduct:{},
    loading:false,
}

// eslint-disable-next-line react-refresh/only-export-components
const BaseUrl="https://fakestoreapi.com";


export const getProducts=createAsyncThunk("product",async()=>{
    const response = await  axios.get(`${BaseUrl}/products`);
    return response.data;
 });

export const productSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{
        //  http isteği atmadığım zamana  burayı kullanırız 
        setSelectedProduct : (state,action) =>{
            //  state benim initial statimi temsil eder 
            //  action setSelectedProduct ı çağırdığımda içine parametre geçtiğim değeri temsil eder
            
            state.selectedProduct=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            //  burada demek istediğim 
            //  ben buildera bir durum eklemek istoyrum bu durum  istek attım hala sserverdan cevap bekliyorum  demek
            state.loading=true;

        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            // state im benim inital statimi temsin ederr 
            //  action ise  getProducts fonksiyonunda return edilen değerdir
            state.loading=false,
            state.products=action.payload;
            
        })
    }
    

})


export const {setSelectedProduct} = productSlice.actions

export default productSlice.reducer
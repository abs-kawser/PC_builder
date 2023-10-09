import { createSlice } from '@reduxjs/toolkit'


const initialState={
    cartItems:[]
  
}


export const productSlice=createSlice({
    name:'cart',
   initialState,
  reducers:{
    AddtoCart:(state,action)=>{
        const item=action.payload
            const existItem=state.cartItems.find(x=> x._id === item._id)
           
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=> x._id === existItem._id ? item : x)
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item],
                 
                }
            } 
        
      
    }
  }
})

export const {AddtoCart} = productSlice.actions;
export default productSlice.reducer;

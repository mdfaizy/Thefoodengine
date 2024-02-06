import { createSlice } from "@reduxjs/toolkit";



// export  const cartSlice=createSlice({
//     name:"cart",
//     initialState:[]
//         // items:[],
// ,
//     reducers:{
//     addItems:(state,action) => {
//         state.push(action.payload);
//     },
//     removeItem:(state,action) => {
//         return state.filter((item) => item.id !== action.payload);
//     },
//     // reducers:{
//     //     addItems:(state,action)=>{
//     //     //mutating the state here
//     //         state.items.push(action.payload);
//     //     },
//     //     // removeItem:(state,action)=>{
//     //     //     // state.items.pop();
//     //     //     return state.filter((item) => item.id !== action.payload);
//     //     // },

//     //     removeItem: (state, action) => {
//     //         const itemIdToRemove = action.payload;
//     //         state.items = state.items.filter((item) => item.id !== itemIdToRemove);
//     //       },
//         clearCart:(state)=>{
//          state.items.length=0
//         },
//     },

// });




// // // export const { addItems,removeItem,clearCart}=cartSlice.actions;

// // // export default cartSlice.reducer;


// export const { addItems, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
    },
    reducers: {
      addItems: (state, action) => {
        state.items.push(action.payload);
      },
      removeItem: (state, action) => {
        const itemIdToRemove = action.payload;
        state.items = state.items.filter((item) => item.card.info.id !== itemIdToRemove);
      },
      clearCart: (state) => {
        state.items.length = 0;
      },
    },
  });
  
  export const { addItems, removeItem, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
  




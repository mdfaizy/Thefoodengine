
// import {useSelector } from "react-redux";
//  import Items from "../Items"

// const Cart = () => {

//     const cartItems=useSelector((store)=>store.cart.items);
//   return (
//     <div className="text-center m-4 p-4">
// <h1 className="text-2xl font-bold">Cart</h1>
//         <div className="w-6/12 m-auto ">
                   
//             <Items items={cartItems}/>
//         </div>
//     </div>
//   )
// }

// export default Cart




// Cart.js
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem, decreaseQuantity, clearCart } from "../../utils/cartSlice";
import Items from "../Items";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <Items
          items={cartItems}
          onRemove={handleRemoveItem}
          onIncreaseQuantity={handleAddItem}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;








import { CDN_URL } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "../../utils/cartSlice";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
const CartItem = ({item }) => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItems(item));
    };

    const removeFromCart = () => {
        dispatch(removeItem(item.card.info.id));
    }
    return (
        <div className="items-center p-2  justify-between w-8/12 m-auto       ">
            <div className="border p-2 border-cyan-950">
                <div className="flex items-center justify-between gap-5  flex-wrap ">
                    <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className=' rounded-2xl text-center justify-center flex w-[100px]' />
                    <h1 className="text-xl text-slate-700 font-semibold">{item.card.info.name}</h1>
                    <p className="font-bold text-lg text-green-600">₹{item.card.info.price / 100}</p>
                    <div className="flex justify-between p-2 border-t-emerald-600 bg-green-900 text-white font-bold w-[150px]">
                        <button className='' onClick={removeFromCart}>
                            <FiMinus />
                        </button>
                        <button>{item.length}</button>
                        <button onClick={() => handleAddItem(item)}>
                            <FiPlus/>
                        </button>
                    </div>
                </div>
                <div className=''>
                    <h1 className="text-base text-slate-700 font-medium">{item.card.info.description}</h1>
                </div>
            </div>
        </div>
    );
};

  export default CartItem;
  

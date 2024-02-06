import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItems } from '../utils/cartSlice';
const Items = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div className='p-2 m-2 border-b-2 text-left border-gray-500' key={item.card.info.id}>
          <div className='py-2'>
            <span className='py-2 font-bold'>{item.card.info.name}</span>
            <span className='px-2'>₹{item.card.info.price / 100}</span>
          </div>
          <div className='flex justify-between'>
            <p className='text-ms'>{item.card.info.description}</p>
            <div className='w-3/12 p-2'>
              <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
              <button
                className="bg-black text-white font-medium px-2 pl-3 py-[2] rounded-sm mt-3   justify-center flex text-center"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;

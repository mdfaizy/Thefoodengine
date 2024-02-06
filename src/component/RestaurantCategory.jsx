// import { useState } from 'react';
import Items from './Items';
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems,setShowItems]=useState(false);
  console.log(data);
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  }
  return (
    <div >
      <div className="w-6/12 mx-auto my-4 shadow-lg border-gray-200 border-2 rounded-lg p-4">
        <div className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <span className='font-bold text-xl cursor-pointer'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {
          showItems && <Items items={data.itemCards} />
        }
      </div>
    </div>
  )
}

export default RestaurantCategory
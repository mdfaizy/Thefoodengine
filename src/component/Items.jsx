import {CDN_URL} from '../utils/constants';

const Items = ({items}) => {
  return (
    <div>
      {items.map((item)=>(
          <div className='p-2 m-2 border-b-2 text-left border-gray-500 justify-between flex'
          key={item.card.info.id}>

            <div className='py-2'>
            <span className='py-2 font-bold'>{item.card.info.name}</span>
            <span className='px-2'>₹{item.card.info.price/100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>

            <div className='w-3/12 p-2 '>
              <img src={CDN_URL+item.card.info.imageId} alt="" />
              <button className='border border-red-500 ml-4 rounded-3xl w-[7rem] hover:text-white   hover:bg-green-400'>Add +</button>
            </div>
            </div>
        ))

      }
    </div>
  )
}

export default Items
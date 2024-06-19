import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';


const Updatenike = () => {
    const context = useContext(myContext);
    const { nike, setnike, updatenike } = context
  return (
    <div>
    <div>
        <div>
            <div className='w-full h-screen'>
                <div className='flex justify-center items-center w-ful h-[100%]'>

                    <div className='w-[500px]'>


                        <div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={nike.title} onChange={(e) => setnike({ ...nike, title: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3' value={nike.category} onChange={(e) => setnike({ ...nike, category: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={nike.imageUrl} onChange={(e) => setnike({ ...nike, imageUrl: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={nike.imageUrlTwo} onChange={(e) => setnike({ ...nike, imageUrlTwo: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={nike.imageUrlThree} onChange={(e) => setnike({ ...nike, imageUrlThree: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={nike.imageUrlFour} onChange={(e) => setnike({ ...nike, imageUrlFour: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={nike.price} onChange={(e) => setnike({ ...nike, price: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={nike.description} onChange={(e) => setnike({ ...nike, description: e.target.value })} /></div>

                        <div className='text-center'>

                            <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={updatenike}>Send</button></div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Updatenike
